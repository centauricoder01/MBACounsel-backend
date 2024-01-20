import { Services } from "../../models/Home/Services.model.js";

const addServices = async (req, res) => {
  try {
    const { Img, text } = req.body;
    await Services.create({
      Img: Img,
      Text: text,
    });
    return res.status(201).json({ message: "Services Created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const getServices = async (req, res) => {
  try {
    const allServices = await Services.find();
    res.status(200).json({ message: "Banner find successfully", allServices });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const deleteServices = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await Services.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateServices = async (req, res) => {
  try {
    const { id, Img, text } = req.body;
    const updatedDocument = await Services.findByIdAndUpdate(
      id,
      {
        $set: {
          Img: Img,
          Text: text,
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

export { addServices, getServices, deleteServices, updateServices };
