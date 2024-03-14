import Joi from "joi";
import { LatestNews } from "../../models/LatestNews/LatestNews.model.js";
import mongoose from "mongoose";

export const addNews = async (req, res) => {
  try {
    const schema = Joi.object({
      Image: Joi.string().required(),
      Date: Joi.date().iso().required(),
      Category: Joi.string().required(),
      MetaKeywords: Joi.string().required(),
      ShortDescription: Joi.string().required(),
      title: Joi.string().required(),
      SlugUrl: Joi.string().required(),
      MetaTitle: Joi.string().required(),
      MetaDescription: Joi.string().required(),
      Description: Joi.string().required(),
      TrendingNews: Joi.boolean().required(),
      FeaturedNews: Joi.boolean().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const newsItem = new LatestNews(req.body);
    const data = await newsItem.save();

    res.send({ message: "News Has been Added", data });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the news item.",
    });
  }
};

export const getNews = async (req, res) => {
  try {
    const allNews = await LatestNews.find();
    res.status(200).json({
      success: true,
      message: "All News retrieved successfully",
      data: allNews,
    });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      res.status(400).json({ message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
};

export const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const newsByid = await LatestNews.findById(id);

    if (!newsByid) {
      return res.status(404).json({ message: "News not found" });
    }

    return res.status(200).json({ message: "News available", news: newsByid });
  } catch (error) {
    console.error("Error fetching News:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const deletedDocument = await LatestNews.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    return res.status(200).json({
      message: "Document deleted successfully",
      deletedDocument,
    });
  } catch (error) {
    console.error("Error deleting document:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNews = async (req, res) => {
  try {
    const { id, latestNewsValue } = req.body;
    const latestNews = await mongoose.model("latestnews").findById(id);

    if (!latestNews) {
      return res.status(404).send({ message: "latestNews not found" });
    }

    const allowedUpdates = Object.keys(mongoose.model("latestnews").schema.obj);
    const isValidOperation = Object.keys(latestNewsValue).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(latestNewsValue).forEach((update) => {
      latestNews[update] = latestNewsValue[update];
    });

    await latestNews.save();

    res
      .status(201)
      .json({ message: "latestNews updated successfully", latestNews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
