import {
	StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder,
	ActionRowBuilder,
	EmbedBuilder,
	type ButtonInteraction,
	type Snowflake,
	StringSelectMenuInteraction,
} from "discord.js";
import { readFromDatabase, addVotes } from "../../utils/helpers/database.js";

export async function execute(
	interaction: ButtonInteraction<"cached">,
	uid: Snowflake
) {
	const renders = readFromDatabase();

	let votes = [];

	await interaction.deferReply({ ephemeral: true });

	let embed = new EmbedBuilder().setTitle("Stemmen");

	for (let i = 0; i < 3; i++) {
		const voteMenu = new StringSelectMenuBuilder()
			.setCustomId(`vote-${uid}`)
			.setPlaceholder(`Kies de #${i + 1} render`)
			.addOptions(
				renders.renders.map((render) => {
					return new StringSelectMenuOptionBuilder()
						.setLabel(render.title)
						.setValue(render.userId);
				})
			);

		const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
			voteMenu
		);

		await interaction.editReply({
			content: `Kies jouw #${i + 1} render`,
			components: [row],
			embeds: [embed],
		});

		// todo: fix (collector does not collect second/third vote)

		await interaction.channel
			.awaitMessageComponent({
				filter: (i) =>
					i.user.id === interaction.user.id && i.customId === `vote-${uid}`,
				time: 60000,
			})
			.then(async (menuI: StringSelectMenuInteraction) => {
				votes.push(menuI.values[0]);

				embed.addFields({
					name: `#${i + 1}`,
					value: menuI.values[0],
					inline: true,
				});
			});
	}

	// todo: send to db
}
