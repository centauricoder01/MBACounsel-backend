import { accredition } from "../../models/Attribute/AddAccreditation.model.js";

const AddAccreditation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddAccreditation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetAccreditation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetAccreditation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateAccreditation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateAccreditation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteAccreditation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteAccreditation" });
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
