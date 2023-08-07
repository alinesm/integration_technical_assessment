import axios from "axios";
import { NextFunction } from "express";
import httpStatus from "http-status";
import { Request, Response } from "express";

export async function getRandomUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await axios.get("https://randomuser.me/api");
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
}
