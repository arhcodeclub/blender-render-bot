import { type Snowflake } from "discord.js";
import { URL } from "node:url";
import fs from "node:fs";

interface votes {
	voterId: Snowflake;
}

interface render {
	title: string;
	url: string;
	userId: Snowflake;
	votes: votes[];
}

export function addVotes(votes) {}

export function addRender(renderData: render) {
	let obj;
	let json;

	const path = new URL("../../../db/database.json", import.meta.url).pathname;

	console.log(path);

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
	const path = new URL("../../../db/database.json", import.meta.url).pathname;

	const obj = fs.readFileSync(path, "utf8");

	return JSON.parse(obj);
}
