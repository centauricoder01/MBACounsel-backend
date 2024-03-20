import { Router } from "express";

import {
  addArticle,
  getArticle,
  updateArticleById,
  deleteArticle,
  updateArticle,
} from "../controllers/Article/Article.controller.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/article").post(addArticle);
router.route("/article").get(getArticle);
router.route("/article/:id").get(updateArticleById);
router.route("/article").put(updateArticle);
router.route("/article").delete(deleteArticle);

export default router;
