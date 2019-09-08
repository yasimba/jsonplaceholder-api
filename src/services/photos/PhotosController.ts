import { db } from "../../utils/dbUtils";

/* return a specific photo (authenticated) */
export const getPhotos = (id: number) => {
    let all_photos = db.get('photos').filter({ id: id })
    .value()
    return all_photos;
};

/* fetch all photos associated with the user (authenticated) 
Fetch all albums that the user has, then use them to query for photos*/
export const getPhotosByUserId = (userId: number) => {    
    let albums:any[] = [];
    let userPhotos:any[] = [];
    let userObject = db.get('albums').filter({ userId: userId }).value()
    for(const album of userObject){
        albums.push(album["id"]);
    }    
    for(const albumId of albums){
        let photo = db.get('photos').filter({albumId: albumId}).value()    
        userPhotos.push(photo)
    }    
    return userPhotos;
};
