import process from "node:process";
import { basename } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { GatewayIntentBits, type RateLimitData } from "discord.js";
import dotenv from "dotenv";
import readdirp from "readdirp";
import { logger, getCommandData, ExtendedClient } from "./utils/index.js";

dotenv.config();

if (!process.env.CLIENT_ID) {
	logger.error("No client id provided.");
	process.exit(1);
}

/**
 * Client for the bot with intents and partials
 */
const client: ExtendedClient = new ExtendedClient({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.MessageContent,
	],
});

try {
	for await (const dir of readdirp(
		fileURLToPath(new URL("interactions", import.meta.url)),
		{
			fileFilter: ["*.js"],
			directoryFilter: ["!buttons"],
		}
	)) {
		const command = await import(`${dir.fullPath}`);
		const commandData = getCommandData(dir.path);

		if (!commandData) {
			logger.warn(
				{ name: dir.path },
				"Unable to load command data, skipping..."
			);
			continue;
		}

		logger.info({ name: dir.path }, `Loading command: ${commandData.name}`);
		client.interactions.set(commandData.name, command);
	}

	for await (const dir of readdirp(
		fileURLToPath(new URL("interactions/buttons", import.meta.url)),
		{
			fileFilter: ["*.js"],
		}
	)) {
		const button = await import(`${dir.fullPath}`);
		const buttonName = basename(dir.path, ".js");

		if (!buttonName) {
			logger.warn("Unable to load button data, skipping...", "LOAD");
			continue;
		}

		logger.info(`Loading button: ${buttonName}`, "LOAD");
		client.buttons.set(buttonName, button);
	}

	for await (const dir of readdirp(
		fileURLToPath(new URL("events", import.meta.url)),
		{ fileFilter: "*.js" }
	)) {
		const event = await import(`${dir.fullPath}`);
		const eventClass = new event.default();

		logger.info({ name: dir.path }, `Loading event: ${eventClass.name}`);

		if (eventClass.once) {
			client.once(eventClass.name, (...args: any[]) =>
				eventClass.execute(...args, client)
			);
		} else {
			client.on(eventClass.name, (...args: any[]) =>
				eventClass.execute(...args, client)
			);
		}
	}
} catch (_error) {
	const error = _error as Error;
	logger.error(error, error.message);
}

client.on("error", (error: Error) => {
	logger.error("The WebSocket encountered an error:", error);
});

client.rest.on("rateLimited", (info: RateLimitData) => {
	logger.warn(`Rate limited for ${info.timeToReset}ms on route ${info.route}`);
});

await client.login(process.env.BOT_TOKEN).catch((error: Error) => {
	logger.error(`Error logging in: ${error.message}`);
});
