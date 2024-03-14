import { newcategory } from "../../models/Attribute/AddNewsCategory.model.js";

export const AddNewCategory = async (req, res) => {
  try {
    const { CategoryValue } = req.body;
    await newcategory.create({
      CategoryValue: CategoryValue,
    });
    res.status(201).json({ message: "Category has been Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const GetNewCategory = async (req, res) => {
  try {
    const allNewCategory = await newcategory.find();
    res.status(200).json({
      message: "All Category Info",
      allNewCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const DeleteNewCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await newcategory.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const UpdateNewCategory = async (req, res) => {
  try {
    const { id, NewsCategory } = req.body;
    const updatedDocument = await newcategory.findByIdAndUpdate(
      id,
      {
        $set: {
          CategoryValue: NewsCategory.CategoryValue,
        },
      },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "Category updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
