import { Router } from "express";
import {
  addBanner,
  deleteBanner,
  getBanner,
  updateBanner,
} from "../controllers/Home/Banner.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  addNotification,
  deleteNotification,
  getNotification,
  updateNotification,
} from "../controllers/Home/Notification.controller.js";

const router = Router();

//Banner routes
router.route("/addbanner").post(
  upload.fields([
    {
      name: "Img",
      maxCount: 1,
    },
  ]),
  addBanner,
);
router.route("/getbanner").get(getBanner);
router.route("/updatebanner").put(updateBanner);
router.route("/deletebanner").delete(deleteBanner);

// Latest Notificaton
router.route("/addnotification").post(addNotification);
router.route("/getnotification").get(getNotification);
router.route("/deletenotification").delete(deleteNotification);
router.route("/updatenotification").put(updateNotification);

export default router;
