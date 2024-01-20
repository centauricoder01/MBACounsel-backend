import { LatestNews } from "../../models/Home/LatestNews.model.js";

const addLatestNews = async (req, res) => {
  try {
    const { Img, text, desc, shortdesc, date } = req.body;
    await LatestNews.create({
      Img: Img,
      Text: text,
      Date: date,
      ShortDesc: shortdesc,
      Desc: desc,
    });
    return res.status(201).json({ message: "LatestNews Created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const getLatestNews = async (req, res) => {
  try {
    const allNews = await LatestNews.find();
    res.status(200).json({ message: "Banner find successfully", allNews });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const updateLatestNews = async (req, res) => {
  try {
    const { id, Img, text, desc, shortdesc, date } = req.body;
    const updatedDocument = await LatestNews.findByIdAndUpdate(
      id,
      {
        $set: {
          Img: Img,
          Text: text,
          Date: date,
          ShortDesc: shortdesc,
          Desc: desc,
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

const deleteLatestNews = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await LatestNews.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addLatestNews, updateLatestNews, getLatestNews, deleteLatestNews };
