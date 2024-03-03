import { Router } from "express";

import {
  addExam,
  getExam,
  updateExam,
  deleteExam,
  getExamById,
} from "../controllers/Exam/Exam.controller.js";

const router = Router();

// ALL ROUTES START FROM HERE

router.route("/addexam").post(addExam);
router.route("/getexam").get(getExam);
router.route("/getexam/:id").get(getExamById);
router.route("/updateingexam").put(updateExam);
router.route("/deleteexam").delete(deleteExam);

export default router;
