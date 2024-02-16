import { specilization } from "../../models/Attribute/AddSpecilization.model.js";

const AddSpecilization = async (req, res) => {
  try {
    const { coursevalue, specilizationvalue } = req.body;
    console.log(coursevalue, specilizationvalue);
    if (!coursevalue || !specilizationvalue) {
      return res.status(400).json({ message: "Value are Required" });
    }
    await specilization.create({
      courseValue: coursevalue,
      specilizationValue: specilizationvalue,
    });
    res
      .status(201)
      .json({ message: "Course and Specilization has been added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetSpecilization = async (req, res) => {
  try {
    const allspecilization = await specilization.find();
    res.status(200).json({
      message: "We get all the Specilization Info",
      allspecilization,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateSpecilization = async (req, res) => {
  try {
    const { id, coursevalue, specilizationvalue } = req.body;
    const updatedDocument = await specilization.findByIdAndUpdate(
      id,
      {
        $set: {
          courseValue: coursevalue,
          specilizationValue: specilizationvalue,
        },
      },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "Specilizatoi updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteSpecilization = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await specilization.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({
      message: "Specilization deleted successfully",
      deletedDocument,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export {
  AddSpecilization,
  UpdateSpecilization,
  GetSpecilization,
  DeleteSpecilization,
};
