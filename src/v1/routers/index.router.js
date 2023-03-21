import express from "express";
import auth from "./auth/index.router";
import routerUpload from "./upload/upload.router";
import routerCategory from "./categories/categories.router";
import routerUser from "./user/user.router";
import routerProduct from "./products/products.router";
import routerFormbook from "./formbook/formbook.router";
import routerPuslishing from "./publishing/publishing.router";
import routerAuthor from "./author/author.router";

const router = express.Router();

router.use("", auth);
router.use("", routerUser);
router.use("", routerUpload);
router.use("", routerCategory);
router.use("", routerProduct);
router.use("", routerFormbook);
router.use("", routerPuslishing);
router.use("", routerAuthor);

export default router;
