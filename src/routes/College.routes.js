import { Router } from "express";
import {
  addCollege,
  deletecollege,
  getCollege,
  updateCollege,
} from "../controllers/College/College.controller.js";

const router = Router();

router.route("/addcollege").post(addCollege);
router.route("/getcollege").get(getCollege);
router.route("/updatecollege").put(updateCollege);
router.route("/deletecollege").delete(deletecollege);

export default router;
