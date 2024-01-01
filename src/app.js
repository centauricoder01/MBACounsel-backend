import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import

//routes declaration
app.get("/", (req, res) =>
  res.send({ message: "Welcome Back, I am calling from MBACousel Backend" }),
);

// app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export { app };
