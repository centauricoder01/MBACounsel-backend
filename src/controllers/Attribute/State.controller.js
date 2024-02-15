import { state } from "../../models/Attribute/AddState.model.js";

const AddState = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddState" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetState = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetState" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateState = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateState" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteState = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteState" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddState, UpdateState, GetState, DeleteState };
