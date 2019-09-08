import { db } from "../../utils/dbUtils";

/* return a specific album (authenticated) */
export const getAlbums = (id: number) => {
    let all_albums = db.get('albums').filter({ id:id })
    .value()
    return all_albums;
};

/*fetch all albums associated with the user (authenticated) */
export const getAlbumsByUserId = (userId: number) => {
    let album = db.get('albums').filter({ userId: userId})
    .value()
    return album;
};
