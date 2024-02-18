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
    const { id, cityVal } = req.body;
    const cityValue = await city.findById(id);

    if (!cityValue) {
      return res.status(404).send({ message: "City not found" });
    }

    const allowedUpdates = Object.keys(city.schema.obj);
    const isValidOperation = Object.keys(cityVal).every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid updates!" });
    }

    Object.keys(cityVal).forEach((update) => {
      cityValue[update] = cityVal[update];
    });

    await cityValue.save();

    res
      .status(201)
      .json({ message: "College updated successfully", cityValue });
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
