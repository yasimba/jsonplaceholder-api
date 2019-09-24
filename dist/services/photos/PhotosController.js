"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbUtils_1 = require("../../utils/dbUtils");
/* return a specific photo (authenticated) */
exports.getPhotos = (id) => {
    let all_photos = dbUtils_1.db.get('photos').filter({ id: id })
        .value();
    return all_photos;
};
/* fetch all photos associated with the user (authenticated)
Fetch all albums that the user has, then use them to query for photos*/
exports.getPhotosByUserId = (userId) => {
    let albums = [];
    let userPhotos = [];
    let userObject = dbUtils_1.db.get('albums').filter({ userId: userId }).value();
    for (const album of userObject) {
        albums.push(album["id"]);
    }
    for (const albumId of albums) {
        let photo = dbUtils_1.db.get('photos').filter({ albumId: albumId }).value();
        userPhotos.push(photo);
    }
    return userPhotos;
};
//# sourceMappingURL=PhotosController.js.map