import { Router } from "express";

import {
  addArticle,
  getArticle,
  deleteArticle,
  updateArticle,
  getArticleById,
} from "../controllers/Article/Article.controller.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/addarticle").post(verifyAdminMiddleware, addArticle);
router.route("/getarticle").get(getArticle);
router.route("/getarticlebyid/:id").get(getArticleById);
router.route("/updatearticle").put(verifyAdminMiddleware, updateArticle);
router.route("/deletearticle").delete(verifyAdminMiddleware, deleteArticle);

export default router;
