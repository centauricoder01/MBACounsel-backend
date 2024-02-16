import { accredition } from "../../models/Attribute/AddAccreditation.model.js";

const AddAccreditation = async (req, res) => {
  try {
    const { accreditionvalue } = req.body;
    await accredition.create({ accreditionValue: accreditionvalue });
    res.status(201).json({ message: "We got you in AddAccreditation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetAccreditation = async (req, res) => {
  try {
    const allAccredition = await accredition.find();
    res.status(200).json({
      message: "We got you in GetAccreditation",
      allAccredition,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateAccreditation = async (req, res) => {
  try {
     const { id, updateaccreditation } = req.body;
     const updatedDocument = await accredition.findByIdAndUpdate(
       id,
       {
         $set: {
           accreditionValue: updateaccreditation,
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

const DeleteAccreditation = async (req, res) => {
  try {
   const { id } = req.body;
   const deletedDocument = await accredition.findByIdAndDelete(id);

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

export {
  AddAccreditation,
  UpdateAccreditation,
  GetAccreditation,
  DeleteAccreditation,
};
