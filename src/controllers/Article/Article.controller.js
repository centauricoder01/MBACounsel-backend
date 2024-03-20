import { article } from "../../models/Article/Article.model.js";
import mongoose from "mongoose";

export const addArticle = async (req, res) => {
  try {
    const schema = Joi.object({
      Image: Joi.string().required(),
      Date: Joi.date().iso().required(),
      MetaKeywords: Joi.string().required(),
      ShortDescription: Joi.string().required(),
      title: Joi.string().required(),
      SlugUrl: Joi.string().required(),
      MetaTitle: Joi.string().required(),
      MetaDescription: Joi.string().required(),
      Description: Joi.string().required(),
      TrendingArticle: Joi.boolean().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const ArticleItem = new article(req.body);
    const data = await ArticleItem.save();

    res.send({ message: "Article Has been Added", data });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the news item.",
    });
  }
};

export const getArticle = async (req, res) => {
  try {
    const allArticle = await article.find();
    res.status(200).json({
      success: true,
      message: "All Article retrieved successfully",
      data: allArticle,
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

export const updateArticleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const articleById = await article.findById(id);

    if (!articleById) {
      return res.status(404).json({ message: "News not found" });
    }

    return res
      .status(200)
      .json({ message: "News available", article: articleById });
  } catch (error) {
    console.error("Error fetching News:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateArticle = async (req, res) => {
   try {
     const { id, articleValue } = req.body;
     const latestArticle = await mongoose.model("article").findById(id);

     if (!latestArticle) {
       return res.status(404).send({ message: "latestArticle not found" });
     }

     const allowedUpdates = Object.keys(
       mongoose.model("article").schema.obj,
     );
     const isValidOperation = Object.keys(articleValue).every((update) =>
       allowedUpdates.includes(update),
     );

     if (!isValidOperation) {
       return res.status(400).send({ error: "Invalid updates!" });
     }

     Object.keys(articleValue).forEach((update) => {
       latestArticle[update] = articleValue[update];
     });

     await latestArticle.save();

     res
       .status(201)
       .json({ message: "latestArticle updated successfully", latestArticle });
   } catch (error) {
     console.log(error);
     res.status(500).json({ message: "Internal server error", error });
   }
};

export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid document ID" });
    }

    const deletedDocument = await article.findByIdAndDelete(id);

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
