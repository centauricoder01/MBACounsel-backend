import { adsBanner } from "../../models/AdsBanner.model.js";

const addAdsBanner = async (req, res) => {
  try {
    res.status(201).json({ message: "This is addAdsBanner" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const getAdsBanner = async (req, res) => {
  try {
    res.status(201).json({ message: "This is getAdsBanner" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const updateAdsBanner = async (req, res) => {
  try {
    res.status(201).json({ message: "This is updateAdsBanner" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const deleteAdsBanner = async (req, res) => {
  try {
    res.status(201).json({ message: "This is deleteAdsBanner" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addAdsBanner, updateAdsBanner, deleteAdsBanner, getAdsBanner };
