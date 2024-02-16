import { collegeType } from "../../models/Attribute/AddCollegeType.model.js";

const AddCollegeType = async (req, res) => {
  try {
    const { collegetype } = req.body;
    await collegeType.create({ collegeTypeValue: collegetype });
    res.status(201).json({ message: "College type has been saved..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetCollegeType = async (req, res) => {
  try {
    const allCollegeTypeValue = await collegeType.find();
    res.status(200).json({
      message: "All College type showen",
      allCollegeTypeValue,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateCollegeType = async (req, res) => {
  try {
    const { id, updatecollegetype } = req.body;
    if (!updatecollegetype) {
      return res.json({
        message: "Please provide correct value",
      });
    }
    const updatedDocument = await collegeType.findByIdAndUpdate(
      id,
      {
        $set: {
          collegeTypeValue: updatecollegetype,
        },
      },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "CollegeType updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteCollegeType = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await collegeType.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res
      .status(201)
      .json({ message: "CollegeType deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddCollegeType, UpdateCollegeType, GetCollegeType, DeleteCollegeType };
