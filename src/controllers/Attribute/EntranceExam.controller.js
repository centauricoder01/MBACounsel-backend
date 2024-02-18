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
    const { id, entranceexam } = req.body;
    const EntranceExamValue = await entranceExam.findById(id);

    if (!EntranceExamValue) {
      return res.status(404).send({ message: "Entrance exam not found" });
    }

    const allowedUpdates = Object.keys(entranceExam.schema.obj);
    const isValidOperation = Object.keys(entranceexam).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(entranceexam).forEach((update) => {
      EntranceExamValue[update] = entranceexam[update];
    });

    await EntranceExamValue.save();

    res
      .status(201)
      .json({ message: "College updated successfully", EntranceExamValue });
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
