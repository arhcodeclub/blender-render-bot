import {
	ButtonBuilder,
	ButtonStyle,
	ActionRowBuilder,
	type ButtonInteraction,
	type TextChannel,
} from "discord.js";
import { readFromDatabase } from "../../utils/helpers/database.js";
import { ids } from "../../constants.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	// todo: open stem channel, sluit submissions en stuur alle renders

	const channel = interaction.guild.channels.cache.get(
		ids.channels.stemmen
	) as TextChannel;

	await channel.permissionOverwrites.edit(ids.roles.contestant, {
		ViewChannel: true,
	});

	const renders = readFromDatabase();

	for (const render of renders.renders) {
		await channel.send({
			content: `${render.title} - <@${render.userId}>`,
			files: [render.url],
		});
	}

	const voteButton = new ButtonBuilder()
		.setCustomId("vote-render")
		.setLabel("Vote")
		.setStyle(ButtonStyle.Primary);

	channel.send({
		content: "Stem op je favoriete render",
		components: [
			new ActionRowBuilder<ButtonBuilder>().addComponents(voteButton),
		],
	});

	return interaction.reply({
		content: `Okidoki; ${channel}`,
		ephemeral: true,
	});
}
