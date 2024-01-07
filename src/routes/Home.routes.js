import { Router } from "express";
import {
  addBanner,
  deleteBanner,
  getBanner,
  updateBanner,
} from "../controllers/Home/Banner.controller.js";
import {
  addNotification,
  deleteNotification,
  getNotification,
  updateNotification,
} from "../controllers/Home/Notification.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  addEvent,
  deleteEvent,
  getEvent,
  updateEvent,
} from "../controllers/Home/Event.controller.js";
import {
  addAdsBanner,
  deleteAdsBanner,
  getAdsBanner,
  updateAdsBanner,
} from "../controllers/Home/AdsBanner.controller.js";
import {
  addLatestNews,
  deleteLatestNews,
  getLatestNews,
  updateLatestNews,
} from "../controllers/Home/LatestNews.controller.js";

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

// Add Event
router.route("/addevent").post(addEvent);
router.route("/getevent").get(getEvent);
router.route("/deleteevent").delete(deleteEvent);
router.route("/updateevent").put(updateEvent);

// Banner Ads
router.route("/addadsbanner").post(addAdsBanner);
router.route("/updateadsbanner").put(updateAdsBanner);
router.route("/getadsbanner").get(getAdsBanner);
router.route("/deleteadsbanner").delete(deleteAdsBanner);

// Latest News
router.route("/addlatestnews").post(addLatestNews);
router.route("/updatelatestnews").put(updateLatestNews);
router.route("/getlatestnews").get(getLatestNews);
router.route("/deletelatestnews").delete(deleteLatestNews);

// Add Services
// router.route("/addservices").post(addAdsBanner);
// router.route("/updateservices").put(updateAdsBanner);
// router.route("/getservices").get(getAdsBanner);
// router.route("/deleteservices").delete(deleteAdsBanner);

// Add Services
// router.route("/addtestimonial").post(addAdsBanner);
// router.route("/updatetestimonial").put(updateAdsBanner);
// router.route("/gettestimonial").get(getAdsBanner);
// router.route("/deletetestimonial").delete(deleteAdsBanner);

export default router;
