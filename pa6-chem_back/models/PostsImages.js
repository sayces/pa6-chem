import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

export default (sequelize, DataTypes) => {
  const PostsImages = sequelize.define(
    "PostsImages",
    {
      postId: {
        type: Sequelize.DataTypes.INTEGER,
      },
      imageId: {
        type: Sequelize.DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      tableName: "PostsImages",
      timestamps: false,
    }
  );
  // return PostsImages;
};
