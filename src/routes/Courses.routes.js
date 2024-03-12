import { Router } from "express";

import {
  addDetailedCourse,
  getDetailedCourse,
  updateDetailedCourse,
  getByIdDetailedCourse,
  deleteDetailedCourse,
} from "../controllers/Courses/Courses.contoller.js";

const router = Router();

router.route("/detailed-courses").post(addDetailedCourse);
router.route("/detailed-courses").get(getDetailedCourse);
router.route("/detailed-courses/:id").get(getByIdDetailedCourse);
router.route("/detailed-courses").put(updateDetailedCourse);
router.route("/detailed-courses").delete(deleteDetailedCourse);

export default router;
