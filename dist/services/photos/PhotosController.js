"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
exports.getPhotos = () => {
    let all_photos = db.get('photos')
        .value();
    return all_photos;
};
exports.getPhotosById = (id) => {
    let photos = db.get('photos').find({ albumId: id }).value();
    return photos;
};
//# sourceMappingURL=PhotosController.js.map