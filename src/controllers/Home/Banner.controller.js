import { Banner } from "../../models/Home/Banner.model.js";
import { uploadOnCloudinary } from "../../utils/Cloudinary.js";

const addBanner = async (req, res) => {
  try {
    const { Img, text } = req.body;
    if (!Img) {
      return res.status(404).json({ message: "Image Not found." });
    }
    await Banner.create({
      Img,
      Text: text,
    });
    return res.status(201).json({ message: "Banner Created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const getBanner = async (req, res) => {
  try {
    const allBanner = await Banner.find();
    res.status(200).json({ message: "Banner find successfully", allBanner });
  } catch (error) {
    console.log(error);
    res
      .status(200)
      .json({ message: "Internal server Error in controller", error });
  }
};

const updateBanner = async (req, res) => {
  try {
    const { id, text } = req.body;
    const updatedDocument = await Banner.findByIdAndUpdate(
      id,
      { $set: { Text: text } },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "Document updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await Banner.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addBanner, getBanner, updateBanner, deleteBanner };
