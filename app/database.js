import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // Hôte de la base de données
    dialect: "postgres", // Le dialecte de la base de données (PostgreSQL ici)
    logging: false, // Désactiver/activer les logs SQL dans la console
    define: {
      timestamps: false, // Désactiver les timestamps par défaut
    },
  }
);

try {
  await sequelize.authenticate();
  console.log("La connexion à la base de données a été établie avec succès.");
} catch (error) {
  console.error("Impossible de se connecter à la base de données:", error);
}

export default sequelize;
