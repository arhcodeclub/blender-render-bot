import type { ButtonInteraction } from "discord.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	// todo: database stuff

	return interaction.reply({
		content: "Submitted render.",
		ephemeral: true,
	});
}
