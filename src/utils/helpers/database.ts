import { type Snowflake } from "discord.js";
import { fileURLToPath, URL } from "node:url";
import fs from "node:fs";

interface render {
	title: string;
	url: string;
	userId: Snowflake;
	votes: number;
}

export function writeToDatabase(renderData: render) {
	let obj;
	let json;

	// todo: don't hardcode
	const path =
		"/Users/teijevisser/Documents/GitHub/blender-render-bot/dist/db/database.json";

	fs.readFile(path, "utf8", function readFileCallback(err, data) {
		if (err) {
			console.log(err);
		} else {
			obj = JSON.parse(data);
			obj.renders.push(renderData);
			json = JSON.stringify(obj);
			fs.writeFile(path, json, function (err) {
				if (err) throw err;
			});
		}
	});
}

export function readFromDatabase() {
	const path =
		"/Users/teijevisser/Documents/GitHub/blender-render-bot/dist/db/database.json";

	const obj = fs.readFileSync(path, "utf8");

	return JSON.parse(obj);
}
