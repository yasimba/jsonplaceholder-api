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
const PhotosController_1 = require("./PhotosController");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
exports.default = [
    {
        path: "/photos",
        method: "get",
        handler: [
            (req, res) => {
                const token = req.headers["auth"];
                let jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
                console.log(jwtPayload.userId);
                const result = PhotosController_1.getPhotosByUserId(parseInt(jwtPayload.userId));
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/photos/:id",
        method: "get",
        handler: [
            (req, res) => {
                const result = PhotosController_1.getPhotos(parseInt(req.params.id));
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map