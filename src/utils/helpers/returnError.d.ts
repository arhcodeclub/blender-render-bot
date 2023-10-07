import { type CommandInteraction, type ChatInputCommandInteraction } from "discord.js";
/**
 * @param interaction - The command interaction to reply to
 * @param permission - The permission that the user is missing
 * @returns An interaction reply, with an error embed
 * @example
 * ```
 * if (!interaction.member?.permissions.has(PermissionFlagsBits.Administrator))
 *   return raiseUserPermissionsError(interaction, PermissionFlagsBits.Administrator);
 * ```
 */
export declare function raiseUserPermissionsError(interaction: CommandInteraction<"cached">, permission: bigint): Promise<import("discord.js").InteractionResponse<true>>;
/**
 * @param interaction - The command interaction to reply to
 * @param permission - The permission that the bot is missing
 * @returns An interaction reply, with an error embed
 * @example
 * ```
 * if (!interaction.guild?.me?.permissions.has(PermissionFlagsBits.Administrator))
 *  return raiseBotPermissionsError(interaction, PermissionFlagsBits.Administrator);
 * ```
 */
export declare function raiseBotPermissionsError(interaction: CommandInteraction<"cached">, permission: bigint): Promise<import("discord.js").InteractionResponse<true>>;
/**
 * @param interaction - The chat input command interaction to reply to
 * @returns An interaction reply, with an error embed
 */
export declare function raiseUserHierarchyError(interaction: ChatInputCommandInteraction<"cached">): Promise<import("discord.js").InteractionResponse<true>>;
/**
 * @param interaction - The chat input command interaction to reply to
 * @returns An interaction reply, with an error embed
 */
export declare function raiseBotHierarchyError(interaction: ChatInputCommandInteraction<"cached">): Promise<import("discord.js").InteractionResponse<true>>;
/**
 * @param interaction - The chat input command interaction to reply to
 * @param errTitle - The title of the error
 * @param description - The description of the error
 * @returns An interaction reply, with an error embed
 * @example
 * ```
 * await raiseMiscellaneousError(interaction, "Error", "Something went wrong while trying to fetch the data!");
 * ```
 */
export declare function raiseMiscellaneousError(interaction: ChatInputCommandInteraction, errTitle: string, description: string): Promise<import("discord.js").InteractionResponse<boolean>>;
//# sourceMappingURL=returnError.d.ts.map