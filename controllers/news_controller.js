import {findAll, findById, create, remove, update} from '../models/news.js';

export const getAll = async (req, res, next) => {
    findAll().then((result) => {
      if (result.length == 0) {
        return res.json({ error: false, message: "Не має жодної новини" });
      }
        req.news = result;
        next();
    })
    .catch(() => {
      return res.json({ error: true, message: "Не вдалось отримати новини" });
    });
}

export const getById = async (req, res, next) => {
    findById(req.params.id).then((result) => {
        req.news = result;
        next();
    })
    .catch(() => {
      return res.json({ error: true, message: "Змініть назву новини" });
    });
}

export const insertNews = async(req, res, next) => {
    create(req.body)
      .then((result) => {
        if(result.affectedRows == 0){
          return res.status(400).json({error: true, message: "Видалення не вдалося"});
        }
        req.result = result;
        next();
      })
      .catch(() => {
        return res.json({ error: true, message: "Змініть назву новини" });
      });
  };

export const deleteNews = async(req, res, next) => {
    remove(req.params.id)
      .then((result) => {
        req.result = result;
        next();
      })
      .catch(() => {
        return res.json({error: true, message: "Новину не знайдено"});
      });
  }

export const updateNews = async(req, res, next) => {
    update(req.body, req.params.id)
      .then((result) => {
        if(result.affectedRows == 0){
          return res.status(400).json({error: true, message: "Редагування не вдалося"});
        }
        req.result = result;
        next();
      })
      .catch(() => {
        return res.status(400).json({error: true, message: "Редагування не вдалося"});
      });
  }