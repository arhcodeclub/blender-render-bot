import type { ChatInputCommandInteraction, InteractionResponse } from "discord.js";
import type { Document } from "mongoose";
import type { IItem } from "../index.js";
/**
 * @experimental
 * @param interaction - The chat input command interaction to handle
 * @param item - The item to use, as an IItem
 * @param data - The user's data, as a mongoose Document
 * @returns An interaction reply, with either a success or error message
 * @example
 * ```
 * const data = await EconomyModel.findOne({
 *  UserId: interaction.user.id,
 * });
 * if (!data) return;
 *
 * const item = await requestItemData(itemInput);
 * if (!item?.usable) return;
 *
 * await useItem(interaction, item, data).catch((error) => { ... });
 * ```
 */
export declare function useItem(interaction: ChatInputCommandInteraction, item: IItem, data: Document): Promise<InteractionResponse<boolean>>;
//# sourceMappingURL=useItem.d.ts.map