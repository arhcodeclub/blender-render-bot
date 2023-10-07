import fs from "node:fs";
/**
 * @param id - The id of the item to get
 * @returns The item data, or undefined if not found
 */
export async function requestItemData(id) {
    const data = await new Promise((resolve, reject) => {
        fs.readFile("./resources/items.json", "utf8", (error, data) => {
            if (error)
                reject(error);
            else
                resolve(data);
        });
    });
    const items = JSON.parse(data);
    return items.find((item) => item.id === id.toLowerCase().replaceAll(/\s+/g, ""));
}
//# sourceMappingURL=requestItemData.js.map