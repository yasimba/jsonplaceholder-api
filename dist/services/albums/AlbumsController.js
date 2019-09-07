"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
exports.getAlbums = () => {
    let all_albums = db.get('albums')
        .value();
    return all_albums;
};
exports.getAlbumsById = (id) => {
    let album = db.get('albums').find({ userId: id })
        .value();
    return album;
};
//# sourceMappingURL=AlbumsController.js.map