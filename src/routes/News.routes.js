import { Router } from "express";

import {
  addNews,
  getNews,
  getNewsById,
  deleteNews,
  updateNews,
} from "../controllers/LatestNews/LatestNews.controller.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/addnews").post(addNews);
router.route("/getnews").get(getNews);
router.route("/getnews/:id").get(getNewsById);
router.route("/updateingnews").put(deleteNews);
router.route("/deletenews").delete(updateNews);

export default router;
