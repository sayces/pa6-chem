// import User from "./User.js";
// import Role from "./Role.js";
import sequelize from "../config/db.js";
import { Sequelize } from "sequelize";
import models from "./index.js"
// import { User, Role } from models;

// const models = {
//   User: User(sequelize),
//   Role: Role(sequelize),
// };
// const { User, Role } = models;


// User.hasOne(Role, {
//   foreignKey: "roleId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// Role.belongsTo(User, {
//   foreignKey: "roleId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// export default { User, Role };
