import { Router } from "express";

import {
  addExam,
  getExam,
  updateExam,
  deleteExam,
  getExamById,
} from "../controllers/Exam/Exam.controller.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/getexam").get(getExam);
router.route("/getexam/:id").get(getExamById);
router.route("/updateingexam").put(verifyAdminMiddleware, updateExam);
router.route("/deleteexam").delete(verifyAdminMiddleware, deleteExam);

export default router;
