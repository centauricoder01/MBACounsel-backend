import { specilization } from "../../models/Attribute/AddSpecilization.model.js";

const AddSpecilization = async (req, res) => {
  try {
    const { coursevalue, specilizationvalue } = req.body;
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
    const { id, specilizationVal } = req.body;
    const specilizatinValue = await specilization.findById(id);

    if (!specilizatinValue) {
      return res.status(404).send({ message: "Specilization not found" });
    }

    const allowedUpdates = Object.keys(specilization.schema.obj);
    const isValidOperation = Object.keys(specilizationVal).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(specilizationVal).forEach((update) => {
      specilizatinValue[update] = specilizationVal[update];
    });

    await specilizatinValue.save();

    res
      .status(201)
      .json({ message: "College updated successfully", specilizatinValue });
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
