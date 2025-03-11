import models from "../models/index.js";
const { Calendar } = models;

const getAllAppointments = async (req, res) => {
  const calendar = await Calendar.findAll();
  res.json(calendar);
};