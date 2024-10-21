import express from "express";
import cors from "cors";

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
// http://localhost:8000/api/v1/users/register

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
app.use("/api/v1/home", homeRouter);
app.use("/api/v1/college", collegeRouter);
app.use("/api/v1/attribute", attributeRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/news", newsRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/article", ArticleRouter);
app.use("/api/v1/authticate", AuthticateRouter);
app.use("/api/v1/inquiry", inquiryRouter);

export { app };
