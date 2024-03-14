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

const router = Router();

// MAIN LOGIN WILL START FROM HERE

// Accredition part
router.route("/addaccredition").post(AddAccreditation);
router.route("/getaccredition").get(GetAccreditation);
router.route("/updateaccredition").put(UpdateAccreditation);
router.route("/deleteaccredition").delete(DeleteAccreditation);

// Affiliation part
router.route("/addaffiliation").post(AddAffiliation);
router.route("/getaffiliation").get(GetAffiliation);
router.route("/updateaffiliation").put(UpdateAffiliation);
router.route("/deleteaffiliation").delete(DeleteAffiliation);

// City part
router.route("/addcity").post(AddCity);
router.route("/getcity").get(GetCity);
router.route("/updatecity").put(UpdateCity);
router.route("/deletecity").delete(DeleteCity);

// College Type
router.route("/addcollegetype").post(AddCollegeType);
router.route("/getcollegetype").get(GetCollegeType);
router.route("/updatecollegetype").put(UpdateCollegeType);
router.route("/deletecollegetype").delete(DeleteCollegeType);

// Course Type
router.route("/addcourse").post(AddCourse);
router.route("/getcourse").get(GetCourse);
router.route("/updatecourse").put(UpdateCourse);
router.route("/deletecourse").delete(DeleteCourse);

// Entrance Exam Type
router.route("/addentranceexam").post(AddEntranceExam);
router.route("/getentranceexam").get(GetEntranceExam);
router.route("/updateentranceexam").put(UpdateEntranceExam);
router.route("/deleteentranceexam").delete(DeleteEntranceExam);

// Specilization Exam Type
router.route("/addspecilization").post(AddSpecilization);
router.route("/getspecilization").get(GetSpecilization);
router.route("/updatespecilization").put(UpdateSpecilization);
router.route("/deletespecilization").delete(DeleteSpecilization);

// state type
router.route("/addstate").post(AddState);
router.route("/getstate").get(GetState);
router.route("/updatestate").put(UpdateState);
router.route("/deletestate").delete(DeleteState);

// News Categories

router.route("/addnewcategories").post(AddNewCategory);
router.route("/getnewcategories").get(GetNewCategory);
router.route("/updatenewcategories").put(UpdateNewCategory);
router.route("/deletenewcategories").delete(DeleteNewCategory);

export default router;
