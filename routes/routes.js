import news_router from "./news_routes.js";
import user_router from "./users_routes.js";
import { Router } from "express";

const router = Router();
router.use(news_router);
router.use(user_router);

export default router;