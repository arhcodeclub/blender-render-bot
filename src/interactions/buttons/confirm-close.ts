import {
	EmbedBuilder,
	type ButtonInteraction,
	type TextChannel,
} from "discord.js";
import { ids } from "../../constants.js";

export async function execute(interaction: ButtonInteraction<"cached">) {
	// todo: sluit stemmen, show results

	const channel = interaction.guild.channels.cache.get(
		ids.channels.stemmen
	) as TextChannel;

	// todo: database stuff

	const renders = {
		example1: {
			title: "example1_title",
			url: "https://media.discordapp.net/attachments/1036359877473341563/1162398027680587947/bird.webp?ex=653bca86&is=65295586&hm=e7b7a18c24f20ce0af7fbb118b561fa48c4186f0993d3f4d539672cfbf33e09c&=&width=732&height=888",
			userId: "",
			votes: 1,
		},
		example2: {
			title: "example2_title",
			url: "https://media.discordapp.net/attachments/1036359877473341563/1162398027680587947/bird.webp?ex=653bca86&is=65295586&hm=e7b7a18c24f20ce0af7fbb118b561fa48c4186f0993d3f4d539672cfbf33e09c&=&width=732&height=888",
			votes: 2,
		},
		example3: {
			title: "example3_title",
			url: "https://media.discordapp.net/attachments/1036359877473341563/1162398027680587947/bird.webp?ex=653bca86&is=65295586&hm=e7b7a18c24f20ce0af7fbb118b561fa48c4186f0993d3f4d539672cfbf33e09c&=&width=732&height=888",
			votes: 3,
		},
	};

	let embed = new EmbedBuilder().setTitle("🏁🏁 DE BLENDER RENDER 🏁🏁");

	const message = await channel.send({ embeds: [embed] });

	let description = "";

	for (const [id] of Object.entries(renders)) {
		description += `${renders[id].title}: ${renders[id].votes}\n`;

		embed.setDescription(description);
		await message.edit({ embeds: [embed] });

		await new Promise((r) => setTimeout(r, 1000));
	}
}
