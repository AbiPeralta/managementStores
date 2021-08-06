
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Stores } from "../entity/Stores";





export const getStore = async (req: Request, res: Response): Promise<Response> => {

  const stores = await getRepository(Stores).find();

  return res.json(stores);
}