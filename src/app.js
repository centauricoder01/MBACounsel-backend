import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import verifyAdminMiddleware from "./middlewares/auth.middleware.js";
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mbacounsel.com",
      "https://www.mbacounsel.com",
      "http://148.66.155.154:3002",
    ], // Allow localhost and both www and non-www domain
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import homeRouter from "./routes/Home.routes.js";
import collegeRouter from "./routes/College.routes.js";
import attributeRouter from "./routes/Attribute.routes.js";
import examRouter from "./routes/Exam.routes.js";
import newsRouter from "./routes/News.routes.js";
import courseRouter from "./routes/Courses.routes.js";
import ArticleRouter from "./routes/Article.routes.js";
import AuthticateRouter from "./routes/Authtication.routes.js";
import inquiryRouter from "./routes/Inquiry.routes.js";

//routes declaration
app.get("/api/v1", (req, res) =>
  res.send({ message: "Welcome Back, I am calling from MBACousel Backend" })
);
app.use("/api/v1/home", verifyAdminMiddleware, homeRouter);
app.use("/api/v1/college", verifyAdminMiddleware, collegeRouter);
app.use("/api/v1/attribute", verifyAdminMiddleware, attributeRouter);
app.use("/api/v1/exam", verifyAdminMiddleware, examRouter);
app.use("/api/v1/news", verifyAdminMiddleware, newsRouter);
app.use("/api/v1/course", verifyAdminMiddleware, courseRouter);
app.use("/api/v1/article", verifyAdminMiddleware, ArticleRouter);
app.use("/api/v1/authticate", AuthticateRouter);
app.use("/api/v1/inquiry", verifyAdminMiddleware, inquiryRouter);

export { app };
