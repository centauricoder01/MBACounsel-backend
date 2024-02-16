import { state } from "../../models/Attribute/AddState.model.js";

const AddState = async (req, res) => {
  try {
    const { statevalue } = req.body;
    await state.create({
      stateValue: statevalue,
    });
    res.status(201).json({ message: "State has been Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetState = async (req, res) => {
  try { 
    const allstate = await state.find();
    res.status(200).json({
      message: "We get all the State Info",
      allstate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateState = async (req, res) => {
  try {
    const { id, statevalue } = req.body;
    const updatedDocument = await state.findByIdAndUpdate(
      id,
      {
        $set: {
          stateValue: statevalue,
        },
      },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({ message: "State updated successfully", updatedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const DeleteState = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await state.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddState, UpdateState, GetState, DeleteState };
