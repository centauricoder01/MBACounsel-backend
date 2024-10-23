import { Router } from "express";
import {
  addCollege,
  deletecollege,
  getCollege,
  getCollegeById,
  updateCollege,
} from "../controllers/College/College.controller.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/addcollege").post(verifyAdminMiddleware, addCollege);
router.route("/getcollege").get(getCollege);
router.route("/updatecollege").put(verifyAdminMiddleware, updateCollege);
router.route("/deletecollege").delete(verifyAdminMiddleware, deletecollege);
router.route("/getbyid/:id").get(getCollegeById);

export default router;
