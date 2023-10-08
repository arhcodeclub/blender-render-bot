import type { ButtonInteraction } from "discord.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	// todo: open stem channel, sluit submissions en stuur alle renders

	return interaction.reply({
		content: "Okidoki",
		ephemeral: true,
	});
}
