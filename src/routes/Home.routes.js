import { Router } from "express";
import { addBanner, getBanner } from "../controllers/Home/Banner.controller.js";
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
export default router;
