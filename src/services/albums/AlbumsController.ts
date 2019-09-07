const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

export const getAlbums = () => {
    let all_albums = db.get('albums')
    .value()
    return all_albums;
};

export const getAlbumsById = (id: number) => {
    let album = db.get('albums').find({ userId: id})
    .value()
    return album;
};
