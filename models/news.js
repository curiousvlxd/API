import connection from "../config/db_connection.js";

export const findAll = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM list_news", (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export const findById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM list_news WHERE id = ?", [id], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export const create = (data) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO list_news SET ?", data, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export const update = (data, id) => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE list_news SET ? WHERE id = ?", [data, id], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

export const remove = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM list_news WHERE id = ?", id, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
