import { Testimonial } from "../../models/Testimonial.model";

const addTestimonial = async (req, res) => {
  try {
    const { Img, review, name, college } = req.body;
    await Testimonial.create({
      Img: Img,
      Name: name,
      College: college,
      Review: review,
    });
    return res.status(201).json({ message: "Services Created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const getTestimonial = async (req, res) => {
  try {
    const allTestimonial = await Testimonial.find();
    res
      .status(200)
      .json({ message: "Banner find successfully", allTestimonial });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

const updateTestimonial = async (req, res) => {
  try {
    const { id, Img, review, name, college } = req.body;
    const updatedDocument = await Testimonial.findByIdAndUpdate(
      id,
      {
        $set: {
          Img: Img,
          Name: name,
          College: college,
          Review: review,
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

const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedDocument = await Testimonial.findByIdAndDelete(id);

    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { addTestimonial, getTestimonial, updateTestimonial, deleteTestimonial };
