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

export const OpenCommand: ChatInputCommand = {
	name: "open",
	description: "Open het stemmen en sluit submissions",
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
			"Weet je het zeker? Zodra stemmen geopend zijn is het niet meer mogelijk om renders in te sturen."
		);

	const confirm = new ButtonBuilder()
		.setCustomId("confirm-open")
		.setLabel("Open")
		.setStyle(ButtonStyle.Danger);

	const cancel = new ButtonBuilder()
		.setCustomId("cancel-open")
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
