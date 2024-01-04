import { adsBanner } from "../../models/AdsBanner.model.js";

const addAdsBanner = async (req, res) => {
  try {
    const { text, subtitle, desc, url } = req.body;
    await adsBanner.create({
      Text: text,
      Subtitle: subtitle,
      Desc: desc,
      Url: url,
    });

    res.status(201).json({ message: "Banner Ads Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const getAdsBanner = async (req, res) => {
  try {
    const allAdsBanner = await adsBanner.find();
    res.status(200).json({
      message: "Banner find successfully",
      allAdsBanner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const updateAdsBanner = async (req, res) => {
  try {
    const { id, text, subtitle, desc, url } = req.body;
    const updatedDocument = await adsBanner.findByIdAndUpdate(
      id,
      {
        $set: {
          Text: text,
          Subtitle: subtitle,
          Desc: desc,
          Url: url,
        },
      },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "Document updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const deleteAdsBanner = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await adsBanner.findByIdAndDelete(id);

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

export { addAdsBanner, updateAdsBanner, deleteAdsBanner, getAdsBanner };
