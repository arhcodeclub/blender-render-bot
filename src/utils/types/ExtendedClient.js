import { Client, Collection } from "discord.js";
/**
 * Extended discord.js Client class
 */
export class ExtendedClient extends Client {
    constructor(options) {
        super(options);
        Object.defineProperty(this, "interactions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "buttons", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cooldowns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.interactions = new Collection();
        this.buttons = new Collection();
        this.cooldowns = new Collection();
    }
}
//# sourceMappingURL=ExtendedClient.js.map