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
import {
  addServices,
  deleteServices,
  getServices,
  updateServices,
} from "../controllers/Home/Services.controller.js";
import {
  addTestimonial,
  deleteTestimonial,
  getTestimonial,
  updateTestimonial,
} from "../controllers/Home/Testimonial.controller.js";

const router = Router();

//Banner routes
router.route("/addbanner").post(
  // upload.fields([
  //   {
  //     name: "Img",
  //     maxCount: 1,
  //   },
  // ]),
  upload.single("Img"),
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
router.route("/addservices").post(addServices);
router.route("/updateservices").put(updateServices);
router.route("/getservices").get(getServices);
router.route("/deleteservices").delete(deleteServices);

// Add Testimonial
router.route("/addtestimonial").post(addTestimonial);
router.route("/updatetestimonial").put(updateTestimonial);
router.route("/gettestimonial").get(getTestimonial);
router.route("/deletetestimonial").delete(deleteTestimonial);

export default router;
