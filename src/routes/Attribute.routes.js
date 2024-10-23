import { Router } from "express";

// ALL IMPORTS WILL BE HERE

import {
  AddAccreditation,
  GetAccreditation,
  UpdateAccreditation,
  DeleteAccreditation,
} from "../controllers/Attribute/Accredition.controller.js";

// Affiliation part
import {
  AddAffiliation,
  GetAffiliation,
  UpdateAffiliation,
  DeleteAffiliation,
} from "../controllers/Attribute/Affiliation.controller.js";

// City part
import {
  AddCity,
  DeleteCity,
  GetCity,
  UpdateCity,
} from "../controllers/Attribute/City.controller.js";

// College Type
import {
  AddCollegeType,
  DeleteCollegeType,
  GetCollegeType,
  UpdateCollegeType,
} from "../controllers/Attribute/CollegeType.controller.js";

// Course Type
import {
  AddCourse,
  DeleteCourse,
  GetCourse,
  UpdateCourse,
} from "../controllers/Attribute/Course.controller.js";

// Entrance Exam
import {
  AddEntranceExam,
  DeleteEntranceExam,
  GetEntranceExam,
  UpdateEntranceExam,
} from "../controllers/Attribute/EntranceExam.controller.js";

// Specilization Part
import {
  AddSpecilization,
  DeleteSpecilization,
  GetSpecilization,
  UpdateSpecilization,
} from "../controllers/Attribute/Specilization.controller.js";

// state part
import {
  AddState,
  DeleteState,
  GetState,
  UpdateState,
} from "../controllers/Attribute/State.controller.js";

// News Categories
import {
  AddNewCategory,
  GetNewCategory,
  UpdateNewCategory,
  DeleteNewCategory,
} from "../controllers/Attribute/AddNewsCategory.controller.js";
import verifyAdminMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// MAIN LOGIN WILL START FROM HERE

// Accredition part
router.route("/addaccredition").post(verifyAdminMiddleware, AddAccreditation);
router.route("/getaccredition").get(GetAccreditation);
router
  .route("/updateaccredition")
  .put(verifyAdminMiddleware, UpdateAccreditation);
router
  .route("/deleteaccredition")
  .delete(verifyAdminMiddleware, DeleteAccreditation);

// Affiliation part
router.route("/addaffiliation").post(verifyAdminMiddleware, AddAffiliation);
router.route("/getaffiliation").get(GetAffiliation);
router
  .route("/updateaffiliation")
  .put(verifyAdminMiddleware, UpdateAffiliation);
router
  .route("/deleteaffiliation")
  .delete(verifyAdminMiddleware, DeleteAffiliation);

// City part
router.route("/addcity").post(verifyAdminMiddleware, AddCity);
router.route("/getcity").get(GetCity);
router.route("/updatecity").put(verifyAdminMiddleware, UpdateCity);
router.route("/deletecity").delete(verifyAdminMiddleware, DeleteCity);

// College Type
router.route("/addcollegetype").post(verifyAdminMiddleware, AddCollegeType);
router.route("/getcollegetype").get(GetCollegeType);
router
  .route("/updatecollegetype")
  .put(verifyAdminMiddleware, UpdateCollegeType);
router
  .route("/deletecollegetype")
  .delete(verifyAdminMiddleware, DeleteCollegeType);

// Course Type
router.route("/addcourse").post(verifyAdminMiddleware, AddCourse);
router.route("/getcourse").get(GetCourse);
router.route("/updatecourse").put(verifyAdminMiddleware, UpdateCourse);
router.route("/deletecourse").delete(verifyAdminMiddleware, DeleteCourse);

// Entrance Exam Type
router.route("/addentranceexam").post(verifyAdminMiddleware, AddEntranceExam);
router.route("/getentranceexam").get(GetEntranceExam);
router
  .route("/updateentranceexam")
  .put(verifyAdminMiddleware, UpdateEntranceExam);
router
  .route("/deleteentranceexam")
  .delete(verifyAdminMiddleware, DeleteEntranceExam);

// Specilization Exam Type
router.route("/addspecilization").post(verifyAdminMiddleware, AddSpecilization);
router.route("/getspecilization").get(GetSpecilization);
router
  .route("/updatespecilization")
  .put(verifyAdminMiddleware, UpdateSpecilization);
router
  .route("/deletespecilization")
  .delete(verifyAdminMiddleware, DeleteSpecilization);

// state type
router.route("/addstate").post(verifyAdminMiddleware, AddState);
router.route("/getstate").get(GetState);
router.route("/updatestate").put(verifyAdminMiddleware, UpdateState);
router.route("/deletestate").delete(verifyAdminMiddleware, DeleteState);

// News Categories

router.route("/addnewcategories").post(verifyAdminMiddleware, AddNewCategory);
router.route("/getnewcategories").get(GetNewCategory);
router
  .route("/updatenewcategories")
  .put(verifyAdminMiddleware, UpdateNewCategory);
router
  .route("/deletenewcategories")
  .delete(verifyAdminMiddleware, DeleteNewCategory);

export default router;
