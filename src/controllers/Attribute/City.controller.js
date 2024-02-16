import { city } from "../../models/Attribute/AddCity.model.js";

const AddCity = async (req, res) => {
  try {
    const { statevalue, cityvalue } = req.body;
    await city.create({
      stateValue: statevalue,
      cityValue: cityvalue,
    });
    res.status(201).json({ message: "city has been Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const GetCity = async (req, res) => {
  try {
    const allCity = await city.find();
    res.status(200).json({
      message: "We get all the city Info",
      allCity,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const UpdateCity = async (req, res) => {
  try {
    const { id, statevalue, cityvalue } = req.body;
    const updatedDocument = await city.findByIdAndUpdate(
      id,
      {
        $set: {
          stateValue: statevalue,
          cityValue: cityvalue,
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

const DeleteCity = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await city.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { AddCity, UpdateCity, GetCity, DeleteCity };
