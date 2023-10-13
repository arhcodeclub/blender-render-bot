import {
	ApplicationCommandOptionType,
	EmbedBuilder,
	ButtonBuilder,
	ButtonStyle,
	ActionRowBuilder,
} from "discord.js";
import type { ChatInputCommandInteraction } from "discord.js";
import {
	permissionToString,
	writeToDatabase,
	type ChatInputCommand,
} from "../../utils/index.js";
import { ids } from "../../constants.js";

export const RequiredPerms = {
	bot: [],
	user: [],
} as const;

export const SubmitCommand: ChatInputCommand = {
	name: "submit",
	description: "bottom text",
	options: [
		{
			name: "render",
			description: "bottom text: the sequel",
			type: ApplicationCommandOptionType.Attachment,
			required: true,
		},
		{
			name: "title",
			description: "bottom text: the threequel",
			type: ApplicationCommandOptionType.String,
			required: true,
		},
	],
	default_member_permissions: permissionToString(RequiredPerms.user),
	dm_permission: true,
} as const;

export async function execute(
	interaction: ChatInputCommandInteraction<"cached">
) {
	const render = interaction.options.getAttachment("render", true);

	// todo: return als het stemmen al begonnen is

	const embed = new EmbedBuilder().setImage(render.url);

	const confirm = new ButtonBuilder()
		.setCustomId("confirm-render")
		.setLabel("Confirm")
		.setStyle(ButtonStyle.Danger);

	const cancel = new ButtonBuilder()
		.setCustomId("cancel-render")
		.setLabel("Cancel")
		.setStyle(ButtonStyle.Secondary);

	const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
		cancel,
		confirm
	);

	await interaction.reply({
		embeds: [embed],
		components: [row],
		ephemeral: true,
	});

	await interaction.channel
		.awaitMessageComponent({
			filter: (i) =>
				i.user.id === interaction.user.id && i.customId === "confirm-render",
			time: 60000,
		})
		.then(async (buttonI) => {
			const title = interaction.options.getString("title", true);

			writeToDatabase({
				title: title,
				url: render.url,
				userId: interaction.user.id,
				votes: 0,
			});

			interaction.member.roles.add(ids.roles.contestant);

			await buttonI.update({
				content: "Okidoki",
				embeds: [embed],
				components: [],
			});
		});
}
