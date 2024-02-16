import { affiliation } from "../../models/Attribute/AddAffiliation.model.js";

const AddAffiliation = async (req, res) => {
  try {
    const { affiliationvalue } = req.body;
    await affiliation.create({ affiliationValue: affiliationvalue });
    res.status(201).json({ message: "Affiliation Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetAffiliation = async (req, res) => {
  try {
    const allAffiliation = await affiliation.find();
    res.status(200).json({
      message: "We got all Affiliation",
      allAffiliation,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateAffiliation = async (req, res) => {
  try {
    const { id, updateaffiliation } = req.body;
    const updatedDocument = await affiliation.findByIdAndUpdate(
      id,
      {
        $set: {
          affiliationValue: updateaffiliation,
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

const DeleteAffiliation = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await affiliation.findByIdAndDelete(id);

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

export { AddAffiliation, UpdateAffiliation, GetAffiliation, DeleteAffiliation };
