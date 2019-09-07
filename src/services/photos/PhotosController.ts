const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

export const getPhotos = () => {
    let all_photos = db.get('photos')
    .value()
    return all_photos;
};

export const getPhotosById = (id: number) => {
    let photos = db.get('photos').find({ albumId: id}).value()    
    return photos;
};
