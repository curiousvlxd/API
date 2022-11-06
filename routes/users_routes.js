import { Router } from "express";
import { insertUser } from "../controllers/user_controller.js";
const router = Router();

router.route("/user").post(insertUser, (req, res) => {
  res.json({ error: false, message: "Користувача додано" });
});

export default router;