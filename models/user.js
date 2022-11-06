import connection from "../config/db_connection.js";

export const create = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO users SET ?", data, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export const readUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE email= ?",
      email,
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      }
    );
  });
};

