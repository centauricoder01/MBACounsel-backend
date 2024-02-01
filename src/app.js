import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
// http://localhost:8000/api/v1/users/register

//routes import
import homeRouter from "./routes/Home.routes.js";
import collegeRouter from "./routes/College.routes.js";

//routes declaration
app.get("/api/v1", (req, res) =>
  res.send({ message: "Welcome Back, I am calling from MBACousel Backend" }),
);
app.use("/api/v1/home", homeRouter);
app.use("/api/v1/college", collegeRouter);

export { app };
