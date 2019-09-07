const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

export const getAllUsers = () => {
    let all_users = db.get('users')
    .value()
    return all_users;
};


