import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

export default (sequelize, DataTypes) => {
  const PostImages = sequelize.define(
    "PostImages",
    {
      postId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Posts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      imageId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Images",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      timestamps: false,
    }
  );

  return PostImages;
};
