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
const AlbumsController_1 = require("./AlbumsController");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
exports.default = [
    {
        path: "/albums",
        method: "get",
        handler: [
            (req, res) => {
                const token = req.headers["auth"];
                let jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
                const result = AlbumsController_1.getAlbumsByUserId(parseInt(jwtPayload.userId));
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/albums/:id",
        method: "get",
        handler: [
            (req, res) => {
                const result = AlbumsController_1.getAlbums(parseInt(req.params.id));
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map