"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersController_1 = require("./UsersController");
exports.default = [
    {
        path: "/users",
        method: "get",
        handler: [
            (req, res) => {
                const result = UsersController_1.getAllUsers();
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map