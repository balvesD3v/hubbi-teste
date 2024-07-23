// backend/src/controllers/authController.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { findUserByUsername, users, User } from "../models/user";

const SECRET_KEY = "your_secret_key";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user: User | undefined = findUserByUsername(username);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
};

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const existingUser = findUserByUsername(username);

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = { username, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: "User registered" });
};
