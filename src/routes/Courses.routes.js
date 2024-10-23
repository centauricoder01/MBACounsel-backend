import { Router } from "express";

import {
  addDetailedCourse,
  getDetailedCourse,
  updateDetailedCourse,
  getByIdDetailedCourse,
  deleteDetailedCourse,
} from "../controllers/Courses/Courses.contoller.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/detailed-courses")
  .post(verifyAdminMiddleware, addDetailedCourse);
router.route("/detailed-courses").get(getDetailedCourse);
router.route("/detailed-courses/:id").get(getByIdDetailedCourse);
router
  .route("/detailed-courses")
  .put(verifyAdminMiddleware, updateDetailedCourse);
router
  .route("/detailed-courses")
  .delete(verifyAdminMiddleware, deleteDetailedCourse);

export default router;
