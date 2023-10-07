/**
 * @param num - The number to pad to 2 digits
 * @returns The number padded to 2 digits
 */
function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}
/**
 * @param milliseconds - The number of milliseconds to convert
 * @returns The converted milliseconds in the format of `HH` hours, `MM` minutes, `SS` seconds
 */
export function convertMS(milliseconds) {
    return `\`${padTo2Digits(Math.floor(milliseconds / 3600000))}\` hours, \`${padTo2Digits(Math.floor((milliseconds / 60000) % 60))}\` minutes, \`${padTo2Digits(Math.floor((milliseconds / 1000) % 60))}\` seconds`;
}
//# sourceMappingURL=convertMS.js.map