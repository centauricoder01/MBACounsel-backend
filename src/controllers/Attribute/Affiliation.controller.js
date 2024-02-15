import { affiliation } from "../../models/Attribute/AddAffiliation.model.js";

const AddAffiliation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddAffiliation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetAffiliation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetAffiliation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateAffiliation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateAffiliation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteAffiliation = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteAffiliation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddAffiliation, UpdateAffiliation, GetAffiliation, DeleteAffiliation };
