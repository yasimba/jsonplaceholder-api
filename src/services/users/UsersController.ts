import { db } from "../../utils/dbUtils";

export const getAllUsers = () => {
    let all_users = db.get('users')
    .value()
    return all_users;
};


