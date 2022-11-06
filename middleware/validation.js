import {readUserByEmail} from "../models/user.js";

const isPasswordEqual = (req, res, next) => {
    const { password, repeat_password } = req.body;
    if (password != repeat_password) {
        return res.json({ error: true, message: "Паролі не співпадають" });
    }
    next();
    };

const isEmailUnique = (req, res, next) => {
    readUserByEmail(req.body.email)
        .then((result) => {
            if (result.length == 0) {
                next();
            }
            return res.json({ error: true, message: "Email уже зареєстрован" });
        })
        .catch(() => {
            return res.json({ error: true, message: "Помилка в БД" });
        });
}

const isPasswordCorrect = (req, res, next) => {
    readUserByEmail(req.body.email)
        .then((result) => {
            if (result.length != 0) {
                if (result[0].password == req.body.password) {
                    next();
                }
                return res.json({ error: true, message: "Невірний пароль" });
            }
        })
        .catch(() => {
            return res.json({ error: true, message: "Помилка в БД" });
        });
}

const isFieldEmpty = (req, res, next) => {
    const { name, email, password, repeat_password } = req.body;
    if (!name || !email || !password || !repeat_password) {
        return res.json({ error: true, message: "Заповніть всі поля" });
    }
    next();
}

export { isPasswordEqual, isEmailUnique, isPasswordCorrect, isFieldEmpty };
