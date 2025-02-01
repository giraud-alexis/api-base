import jwt from "jsonwebtoken";
import { example } from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const agendaController = {
  async create(req, res) {
    const token = req.headers["autorization"];

    if (!token) {
      return res.status(401).json({ error: "Token manquant" });
    }

    try {
      const { example1, example2 } = req.body;

      if (!example1 || !example2) {
        return res
          .status(400)
          .json({ message: "Les champs obligatoires sont manquants." });
      }

      const newexample = await example.create({
        example1,
        example2,
      });

      return res
        .status(201)
        .json({ message: "Événement créé avec succès.", data: newexample });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur lors de la création de l'événement.", error });
    }
  },
};
