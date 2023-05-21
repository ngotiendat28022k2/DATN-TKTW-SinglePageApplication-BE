import express from "express";
import {
    read,
    add,
    list,
    update,
    remove,
} from "../../controllers/infomationPage/infomationPage.controller";
const router = express.Router();

router.get("/infomationPage", list);
router.get("/infomationPage/:id", read);
router.post("/infomationPage/", add);
router.put("/infomationPage/:id", update);
router.delete("/infomationPage/:id", remove);

export default router;
