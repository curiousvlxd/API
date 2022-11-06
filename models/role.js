import connection from "../config/db_connection.js";

export const readRoleIdByName = (name) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT id FROM roles WHERE role = ?", [name], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}