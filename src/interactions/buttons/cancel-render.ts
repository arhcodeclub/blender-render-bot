import type { ButtonInteraction } from "discord.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	return interaction.reply({
		content: "Cancelled submission.",
		ephemeral: true,
	});
}
