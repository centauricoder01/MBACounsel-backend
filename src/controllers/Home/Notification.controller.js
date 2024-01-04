import { Notification } from "../../models/Notification.model.js";

const addNotification = async (req, res) => {
  try {
    const { text } = req.body;
    await Notification.create({
      Text: text,
    });

    return res.status(201).json({ message: "Banner Created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getNotification = async (req, res) => {
  try {
    const allNotification = await Notification.find();
    res.status(200).json({
      message: "Banner find successfully",
      allNotification,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteNotification = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await Notification.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateNotification = async (req, res) => {
  try {
    const { id, text } = req.body;
    const updatedDocument = await Notification.findByIdAndUpdate(
      id,
      { $set: { Text: text } },
      { new: true },
    );
    if (!updatedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json({
      message: "Document updated successfully",
      updatedDocument,
    });
  } catch (error) {
    
  }
};

export {
  addNotification,
  getNotification,
  deleteNotification,
  updateNotification,
};
