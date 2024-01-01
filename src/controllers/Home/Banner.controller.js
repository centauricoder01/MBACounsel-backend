import { Banner } from "../../models/Banner.model.js";
import { uploadOnCloudinary } from "../../utils/Cloudinary.js";

const addBanner = async (req, res) => {
  try {
    const { bannerText } = req.body;
    let bannerImageLocalPath;
    if (
      req.files &&
      Array.isArray(req.files.bannerImg) &&
      req.files.bannerImg.length > 0
    ) {
      bannerImageLocalPath = req.files.bannerImg[0].path;
    }

    const bannerImg = await uploadOnCloudinary(bannerImageLocalPath);

    await Banner.create({
      bannerText,
      bannerImg: bannerImg?.url || "",
    });

    return res.status(201).json({ message: "Banner Created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server Error in controller", error });
  }
};

export { addBanner };
