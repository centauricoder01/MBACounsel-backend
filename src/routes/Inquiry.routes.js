import { Router } from "express";
import {
  addInquiry,
  getInquiry,
} from "../controllers/Inquiry/Inquiry.controllers.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/addinquiry").post(verifyAdminMiddleware, addInquiry);
router.route("/getinquiry").get(getInquiry);

export default router;
