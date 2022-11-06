import {Router} from "express"
import {getAll, getById, insertNews, deleteNews, updateNews} from "../controllers/news_controller.js"
const router = Router();
router
    .route("/news")
    .get(getAll, (req, res) => {
        res.json(req.news);
    })
    .post(insertNews,(req, res) => {
        res.json({message: "POST"});
        console.log(req.body);
    })
router
    .route("/news/:id")
    .get(getById, (req, res) => {
        res.json({
            message: "GET",
            news: req.news});
        console.log(req.params.id);
    })
    .delete(deleteNews, (req, res) => {
        res.json({message: "DELETE", news: req.result.affectedRows});
        console.log(req.params.id);
    })
    .put(updateNews, (req, res) => {
        res.json({message: "PUT", news: req.result});
        console.log(req.body);
    })
export default router;