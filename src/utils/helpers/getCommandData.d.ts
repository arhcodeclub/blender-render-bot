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
export declare function getCommandData(path: string): {
    readonly name: string;
} | null;
//# sourceMappingURL=getCommandData.d.ts.map