export function permissionToString(permissionArray) {
    return permissionArray.length >= 1 ? permissionArray.reduce((a, b) => a | b, 0n).toString() : undefined;
}
//# sourceMappingURL=processPermissions.js.map