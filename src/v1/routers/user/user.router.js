import express from "express";
import User from "../../controllers/user/user.controllers";
import isLogin from "../../middleware/isLogin.middleware";
const router = express.Router();

router.get("/user", User.list);
router.get("/userroot", User.listRoot);
router.get("/user/:id", User.read);
router.post("/user", User.add);
router.put("/user/:id", User.update);
router.delete("/user/:id", User.remove);
export default router;
