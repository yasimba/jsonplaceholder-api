"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhotosController_1 = require("./PhotosController");
exports.default = [
    {
        path: "/photos/:id",
        method: "get",
        handler: [
            (req, res) => {
                const result = PhotosController_1.getPhotosById(parseInt(req.params.id));
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/photos",
        method: "get",
        handler: [
            (req, res) => {
                const result = PhotosController_1.getPhotos();
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map