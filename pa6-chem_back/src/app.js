import sequelize from "../config/db.js";
import express from "express";
import userRoutes from "../routes/userRoutes.js";
import galleryRoutes from "../routes/galleryRoutes.js";
import serviceRoutes from "../routes/serviceRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", galleryRoutes);
app.use("/api", serviceRoutes)

app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection is establisheb seccessfully");
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
