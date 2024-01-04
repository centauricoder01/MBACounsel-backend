import { Event } from "../../models/Event.model.js";

const addEvent = async (req, res) => {
  try {
    const { date, title, desc } = req.body;

    await Event.create({
      Data: date,
      Text: title,
      Desc: desc,
    });
    res.status(201).json({ message: "Event added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const getEvent = async (req, res) => {
  try {
    const allEvent = await Event.find();
    res.status(201).json({ message: "We got Event", allEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await Event.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res
      .status(201)
      .json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
const updateEvent = async (req, res) => {
  try {
    const { id, date, title, desc } = req.body;
    const updateEventDetails = await Event.findByIdAndUpdate(
      id,
      {
        $set: {
          Data: date,
          Text: title,
          Desc: desc,
        },
      },
      { new: true },
    );
    res
      .status(201)
      .json({ message: "Event Updated Successfully", updateEventDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addEvent, getEvent, deleteEvent, updateEvent };
