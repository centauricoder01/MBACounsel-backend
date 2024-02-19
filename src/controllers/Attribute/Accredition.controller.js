import { accredition } from "../../models/Attribute/AddAccreditation.model.js";
import mongoose from "mongoose";

const AddAccreditation = async (req, res) => {
  try {
    const { accreditionvalue } = req.body;
    await accredition.create({ accreditionValue: accreditionvalue });
    res.status(201).json({ message: "We got you in AddAccreditation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetAccreditation = async (req, res) => {
  try {
    const allAccredition = await accredition.find();
    res.status(200).json({
      message: "We got you in GetAccreditation",
      allAccredition,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateAccreditation = async (req, res) => {
  try {
    const { id, accreditionValue } = req.body;
    const accredition = await mongoose.model("accredition").findById(id);

    if (!accredition) {
      return res.status(404).send({ message: "Accredition not found" });
    }

    const allowedUpdates = Object.keys(
      mongoose.model("accredition").schema.obj,
    );

    const isValidOperation = allowedUpdates.includes("accreditionValue");

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    accredition["accreditionValue"] = accreditionValue;

    await accredition.save();

    res
      .status(201)
      .json({ message: "Accredition updated successfully", accredition });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteAccreditation = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await accredition.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res
      .status(201)
      .json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export {
  AddAccreditation,
  UpdateAccreditation,
  GetAccreditation,
  DeleteAccreditation,
};
