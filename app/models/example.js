import sequelize from "../database.js";
import { Model, DataTypes } from "sequelize";

export class nomDuModel extends Model {}
nomDuModel.init(
  {
    example: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    example: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "nom de la table de la bdd",
    timestamps: false,
  }
);
