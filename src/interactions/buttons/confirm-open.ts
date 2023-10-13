import { type ButtonInteraction, type TextChannel } from "discord.js";
import { ids } from "../../constants.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	// todo: open stem channel, sluit submissions en stuur alle renders

	const channel = interaction.guild.channels.cache.get(
		ids.channels.stemmen
	) as TextChannel;

	await channel.permissionOverwrites.edit(ids.roles.contestant, {
		ViewChannel: true,
	});

	return interaction.reply({
		content: `Okidoki; ${channel}`,
		ephemeral: true,
	});
}
