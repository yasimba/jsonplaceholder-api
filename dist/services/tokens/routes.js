"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenController_1 = require("./TokenController");
exports.default = [
    {
        path: "/newToken/:userId",
        method: "get",
        handler: [
            (req, res) => {
                let userId = req.params.userId;
                const result = TokenController_1.getNewToken(userId);
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map