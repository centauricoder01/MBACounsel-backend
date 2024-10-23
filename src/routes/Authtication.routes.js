import { Router } from "express";

import {
  addAuthUser,
  forgetPassword,
  getAuthUser,
  loginAuthUser,
  verifyMail,
} from "../controllers/Authtication/authtication.controllers.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/addAuthUser").post(addAuthUser);
router.route("/loginuser").post(loginAuthUser);
router.route("/getalluser").get(verifyAdminMiddleware, getAuthUser);
router.route("/verifymail").post(verifyMail);
router.route("/forgetpassword").post(forgetPassword);

export default router;
