"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbUtils_1 = require("../../utils/dbUtils");
exports.getAllUsers = () => {
    let all_users = dbUtils_1.db.get('users')
        .value();
    return all_users;
};
//# sourceMappingURL=UsersController.js.map