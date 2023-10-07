import { ApplicationCommandOptionType, } from "discord.js";
import { permissionToString, } from "../../utils/index.js";
export const RequiredPerms = {
    bot: [],
    user: [],
};
export const SubmitCommand = {
    name: "submit",
    description: "bottom text",
    options: [
        {
            name: "render",
            description: "bottom text: the sequel",
            type: ApplicationCommandOptionType.Attachment,
            required: true,
        },
    ],
    default_member_permissions: permissionToString(RequiredPerms.user),
    dm_permission: true,
};
export async function execute(interaction) {
    const render = interaction.options.getAttachment("render");
    // hoi
}
//# sourceMappingURL=submit.js.map