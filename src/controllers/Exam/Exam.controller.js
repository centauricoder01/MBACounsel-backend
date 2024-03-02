import { exam } from "../../models/Exam/Exam.model";
import mongoose from "mongoose";

export const addExam = async (req, res) => {
  try {
    const body = req.body;
    await exam.create(body);
    res.status(201).json({ message: "College Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getExam = async (req, res) => {
  try {
  } catch (error) {}
};

export const updateExam = async (req, res) => {
  try {
  } catch (error) {}
};

export const deleteExam = async (req, res) => {
  try {
  } catch (error) {}
};
