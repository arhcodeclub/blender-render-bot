import type { ButtonInteraction } from "discord.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	// todo: database stuff

	// Max 1 render per user
	// todo: contestant role

	return interaction.reply({
		content: "Submitted render.",
		ephemeral: true,
	});
}
