import { Router } from "express";
import {
  addInquiry,
  getInquiry,
} from "../controllers/Inquiry/Inquiry.controllers.js";

const router = Router();

router.route("/addinquiry").post(addInquiry);
router.route("/getinquiry").get(getInquiry);

export default router;
