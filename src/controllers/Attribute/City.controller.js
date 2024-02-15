import { city } from "../../models/Attribute/AddCity.model.js";

const AddCity = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in AddCity" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetCity = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in GetCity" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateCity = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in UpdateCity" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteCity = async (req, res) => {
  try {
    res.status(201).json({ message: "We got you in DeleteCity" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddCity, UpdateCity, GetCity, DeleteCity };
