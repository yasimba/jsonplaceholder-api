"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
/**Generate new token for use in authenticated routes */
exports.getNewToken = (userId) => {
    const newToken = jwt.sign({ userId: userId }, config_1.default.jwtSecret, {
        expiresIn: "1h"
    });
    console.log(newToken);
    return newToken;
};
//# sourceMappingURL=TokenController.js.map