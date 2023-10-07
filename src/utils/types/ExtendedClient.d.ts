import { Client, Collection } from "discord.js";
/**
 * Extended discord.js Client class
 */
export declare class ExtendedClient extends Client {
    interactions: Collection<string, any>;
    buttons: Collection<string, any>;
    cooldowns: Collection<string, any>;
    constructor(options: any);
}
//# sourceMappingURL=ExtendedClient.d.ts.map