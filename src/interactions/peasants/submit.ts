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
	type ChatInputCommand,
} from "../../utils/index.js";

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
	],
	default_member_permissions: permissionToString(RequiredPerms.user),
	dm_permission: true,
} as const;

export async function execute(interaction: ChatInputCommandInteraction) {
	const render = interaction.options.getAttachment("render", true);

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
}
