import { Router } from "express";

import {
  addAuthUser,
  getAuthUser,
  loginAuthUser,
  sendVerificationMail,
  verifyOtp,
} from "../controllers/Authtication/authtication.controllers.js";

const router = Router();

router.route("/adduser").post(addAuthUser);
router.route("/loginuser").post(loginAuthUser);
router.route("/getalluser").get(getAuthUser);
router.route("/emailverification").post(sendVerificationMail);
router.route("/verifyotp").post(verifyOtp);

export default router;
