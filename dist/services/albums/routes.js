"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlbumsController_1 = require("./AlbumsController");
exports.default = [
    {
        path: "/albums/:id",
        method: "get",
        handler: [
            (req, res) => {
                const result = AlbumsController_1.getAlbumsById(parseInt(req.params.id));
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/albums",
        method: "get",
        handler: [
            (req, res) => {
                const result = AlbumsController_1.getAlbums();
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map