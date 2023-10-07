type IAutocompleteResponse = {
    name: string;
    value: string;
};
/**
 * @param query - The query to autocomplete
 * @param choices - The choices to autocomplete from
 * @returns The autocompleted choices in an array of objects
 */
export declare function damerAutocomplete(query: string, choices: readonly string[]): IAutocompleteResponse[];
export {};
//# sourceMappingURL=damerau.d.ts.map