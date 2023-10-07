import { basename, extname } from "node:path";
/**
 * Get command info from given path
 *
 * @experimental Only returns command name, more info will be added in the future
 * @param path - Path to command
 * @returns Command data
 * @example
 * ```
 * console.log(getCommandData("path/example.js")); // { name: "example" }
 * ```
 */
export function getCommandData(path) {
    if (extname(path) !== ".js") {
        return null;
    }
    return { name: basename(path, ".js") };
}
//# sourceMappingURL=getCommandData.js.map