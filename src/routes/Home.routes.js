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
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

//Banner routes
router.route("/addbanner").post(verifyAdminMiddleware, addBanner);
router.route("/getbanner").get(getBanner);
router.route("/updatebanner").put(verifyAdminMiddleware, updateBanner);
router.route("/deletebanner").delete(verifyAdminMiddleware, deleteBanner);

// Latest Notificaton
router.route("/addnotification").post(verifyAdminMiddleware, addNotification);
router.route("/getnotification").get(getNotification);
router
  .route("/deletenotification")
  .delete(verifyAdminMiddleware, deleteNotification);
router
  .route("/updatenotification")
  .put(verifyAdminMiddleware, updateNotification);

// Add Event
router.route("/addevent").post(verifyAdminMiddleware, addEvent);
router.route("/getevent").get(getEvent);
router.route("/deleteevent").delete(verifyAdminMiddleware, deleteEvent);
router.route("/updateevent").put(verifyAdminMiddleware, updateEvent);

// Banner Ads
router.route("/addadsbanner").post(verifyAdminMiddleware, addAdsBanner);
router.route("/updateadsbanner").put(verifyAdminMiddleware, updateAdsBanner);
router.route("/getadsbanner").get(getAdsBanner);
router.route("/deleteadsbanner").delete(verifyAdminMiddleware, deleteAdsBanner);

// Latest News
router.route("/addlatestnews").post(verifyAdminMiddleware, addLatestNews);
router.route("/updatelatestnews").put(verifyAdminMiddleware, updateLatestNews);
router.route("/getlatestnews").get(getLatestNews);
router
  .route("/deletelatestnews")
  .delete(verifyAdminMiddleware, deleteLatestNews);

// Add Services
router.route("/addservices").post(verifyAdminMiddleware, addServices);
router.route("/updateservices").put(verifyAdminMiddleware, updateServices);
router.route("/getservices").get(getServices);
router.route("/deleteservices").delete(verifyAdminMiddleware, deleteServices);

// Add Testimonial
router.route("/addtestimonial").post(verifyAdminMiddleware, addTestimonial);
router
  .route("/updatetestimonial")
  .put(verifyAdminMiddleware, updateTestimonial);
router.route("/gettestimonial").get(getTestimonial);
router
  .route("/deletetestimonial")
  .delete(verifyAdminMiddleware, deleteTestimonial);

export default router;
