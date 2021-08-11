
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Store } from "../entities/Store";

export const getStores = async (req: Request, res: Response): Promise<Response> => {

  const stores = await getRepository(Store).findAndCount();

  return res.json(Store);
}

export const getStore = async (req: Request, res: Response): Promise<Response> => {

  const store = await getRepository(Store).findOne(req.params.name);

  return res.json(Store);
}