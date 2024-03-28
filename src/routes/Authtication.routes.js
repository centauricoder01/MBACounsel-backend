import { Router } from "express";

import {
  addAuthUser,
  forgetPassword,
  getAuthUser,
  loginAuthUser,
  sendVerificationMail,
  verifyMail,
} from "../controllers/Authtication/authtication.controllers.js";

const router = Router();

router.route("/addAuthUser").post(addAuthUser);
router.route("/loginuser").post(loginAuthUser);
router.route("/getalluser").get(getAuthUser);
router.route("/emailverification").post(sendVerificationMail);
router.route("/verifymail").post(verifyMail);
router.route("/forgetpassword").post(forgetPassword);

export default router;
