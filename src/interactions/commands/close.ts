import {
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
import { ids } from "../../constants.js";

export const RequiredPerms = {
	bot: [],
	user: [],
} as const;

export const CloseCommand: ChatInputCommand = {
	name: "close",
	description: "Sluit het stemmen",
	default_member_permissions: permissionToString(RequiredPerms.user),
	dm_permission: true,
} as const;

export async function execute(
	interaction: ChatInputCommandInteraction<"cached">
) {
	if (!interaction.member.roles.cache.has(ids.roles.judge)) {
		return interaction.reply({
			content: "Ge kunt da ni doen",
			ephemeral: true,
		});
	}

	const embed = new EmbedBuilder()
		.setTitle("Stemmen")
		.setDescription(
			"Weet je het zeker? Zodra stemmen gesloten zijn kan niemand meer stemmen."
		);

	const confirm = new ButtonBuilder()
		.setCustomId("confirm-close")
		.setLabel("Close")
		.setStyle(ButtonStyle.Danger);

	const cancel = new ButtonBuilder()
		.setCustomId("cancel-close")
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
