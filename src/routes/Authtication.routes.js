import { Router } from "express";

import {
  addAuthUser,
  getAuthUser,
  loginAuthUser,
  sendVerificationMail,
} from "../controllers/Authtication/authtication.controllers.js";

const router = Router();

router.route("/adduser").post(addAuthUser);
router.route("/loginuser").post(loginAuthUser);
router.route("/getalluser").get(getAuthUser);
router.route("/emailverification").post(sendVerificationMail);

export default router;
