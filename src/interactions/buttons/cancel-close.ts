import type { ButtonInteraction } from "discord.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	return interaction.reply({
		content: "Dan niet",
		ephemeral: true,
	});
}
