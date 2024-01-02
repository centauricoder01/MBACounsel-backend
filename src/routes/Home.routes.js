import { Router } from "express";
import {
  addBanner,
  deleteBanner,
  getBanner,
  updateBanner,
} from "../controllers/Home/Banner.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

//secured routes
router.route("/addbanner").post(
  upload.fields([
    {
      name: "bannerImg",
      maxCount: 1,
    },
  ]),
  addBanner,
);

router.route("/getbanner").get(getBanner);
router.route("/updatebanner").put(updateBanner);
router.route("/deletebanner").delete(deleteBanner);
export default router;
