import { Router } from "express";

import {
  addArticle,
  getArticle,
  deleteArticle,
  updateArticle,
  getArticleById,
} from "../controllers/Article/Article.controller.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/addarticle").post(addArticle);
router.route("/getarticle").get(getArticle);
router.route("/getarticlebyid/:id").get(getArticleById);
router.route("/updatearticle").put(updateArticle);
router.route("/deletearticle").delete(deleteArticle);

export default router;
