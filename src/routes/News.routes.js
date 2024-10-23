import { Router } from "express";

import {
  addNews,
  getNews,
  getNewsById,
  deleteNews,
  updateNews,
} from "../controllers/LatestNews/LatestNews.controller.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/addnews").post(verifyAdminMiddleware, addNews);
router.route("/getnews").get(getNews);
router.route("/getnews/:id").get(getNewsById);
router.route("/updateingnews").put(verifyAdminMiddleware, updateNews);
router.route("/deletenews").delete(verifyAdminMiddleware, deleteNews);

export default router;
