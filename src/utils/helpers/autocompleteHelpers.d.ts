/**
 * @returns Categories in an array of objects
 */
export declare function getCategories(): {
    name: string;
    value: string;
}[];
/**
 * @returns A list of all the commands in an array formatted for the autocomplete interaction
 * @example
 * ```
 * const commands = await getCommands();
 * console.log(commands); // ["Information: Avatar", "Information: Botinfo", etc..]
 * ```
 */
export declare function getCommands(): Promise<string[]>;
//# sourceMappingURL=autocompleteHelpers.d.ts.map