
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Stores } from "../entity/Stores";





export const getStores = async (req: Request, res: Response): Promise<Response> => {

  const stores = await getRepository(Stores).find();

  return res.json(stores);
}

export const getStore= async (req: Request, res: Response): Promise<Response> => {

  const Store = await getRepository(Stores).findOne(req.params.name);

  return res.json(Store);
}