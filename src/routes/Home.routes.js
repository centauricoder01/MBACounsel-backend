import { Router } from "express";
import { addBanner } from "../controllers/Home/Banner.controller.js";
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

export default router;
