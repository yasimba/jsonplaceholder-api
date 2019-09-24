"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbUtils_1 = require("../../utils/dbUtils");
/* return a specific album (authenticated) */
exports.getAlbums = (id) => {
    let all_albums = dbUtils_1.db.get('albums').filter({ id: id })
        .value();
    return all_albums;
};
/*fetch all albums associated with the user (authenticated) */
exports.getAlbumsByUserId = (userId) => {
    let album = dbUtils_1.db.get('albums').filter({ userId: userId })
        .value();
    return album;
};
//# sourceMappingURL=AlbumsController.js.map