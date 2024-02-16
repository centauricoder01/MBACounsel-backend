import { entranceExam } from "../../models/Attribute/AddEntranceExam.model.js";

const AddEntranceExam = async (req, res) => {
  try {
    const { shortform, fullform } = req.body;
    await entranceExam.create({
      entranceExamShortForm: shortform,
      entranceExamFullForm: fullform,
    });
    res.status(201).json({ message: "Entrance Exam Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetEntranceExam = async (req, res) => {
  try {
    const allEntranceExam = await entranceExam.find();
    res.status(200).json({
      message: "All Entrance Exam Fetched...",
      allEntranceExam,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateEntranceExam = async (req, res) => {
  try {
    const { id, shortform, fullform } = req.body;
    const updatedDocument = await entranceExam.findByIdAndUpdate(
      id,
      {
        $set: {
          entranceExamShortForm: shortform,
          entranceExamFullForm: fullform,
        },
      },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "Exam updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteEntranceExam = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await entranceExam.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export {
  AddEntranceExam,
  UpdateEntranceExam,
  GetEntranceExam,
  DeleteEntranceExam,
};
