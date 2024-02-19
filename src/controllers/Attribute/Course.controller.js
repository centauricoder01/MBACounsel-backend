import { courses } from "../../models/Attribute/AddCourse.model.js";

const AddCourse = async (req, res) => {
  try {
    const { courseimg, courseval } = req.body;
    await courses.create({
      courseImage: courseimg,
      coursesValue: courseval,
    });
    res.status(201).json({ message: "Courses has been Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetCourse = async (req, res) => {
  try {
    const allCourses = await courses.find();
    res.status(200).json({
      message: "All Courses Info",
      allCourses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateCourse = async (req, res) => {
  try {
    const { id, couseVal } = req.body;
    const couseValue = await courses.findById(id);

    if (!couseValue) {
      return res.status(404).send({ message: "City not found" });
    }

    const allowedUpdates = Object.keys(courses.schema.obj);
    const isValidOperation = Object.keys(couseVal).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(couseVal).forEach((update) => {
      couseValue[update] = couseVal[update];
    });

    await couseValue.save();

    res
      .status(201)
      .json({ message: "College updated successfully", couseValue });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteCourse = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await courses.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddCourse, UpdateCourse, GetCourse, DeleteCourse };
