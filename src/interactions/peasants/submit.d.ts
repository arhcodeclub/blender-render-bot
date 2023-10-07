import type { ChatInputCommandInteraction } from "discord.js";
import { type ChatInputCommand } from "../../utils/index.js";
export declare const RequiredPerms: {
    readonly bot: readonly [];
    readonly user: readonly [];
};
export declare const SubmitCommand: ChatInputCommand;
export declare function execute(interaction: ChatInputCommandInteraction): Promise<void>;
//# sourceMappingURL=submit.d.ts.map