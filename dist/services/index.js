"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./users/routes"));
const routes_2 = __importDefault(require("./albums/routes"));
const routes_3 = __importDefault(require("./photos/routes"));
const routes_4 = __importDefault(require("./tokens/routes"));
exports.default = [...routes_1.default, ...routes_2.default, ...routes_3.default, ...routes_4.default];
//# sourceMappingURL=index.js.map