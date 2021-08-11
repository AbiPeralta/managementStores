
import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Store } from "../entities/Store";

export const storeList = async (req: Request, res: Response): Promise<Response> => {
  let {
    page,
    name
  } = req.query;

  page = page ? page : 0; // if page is undefined save 0
  
  if (page == 1) {
    page = 0;
  }

  let offset = page * 10;

  let findConfig: any = {
    select: ['id', 'name', 'address'],
    order: {
      id: 'ASC',
    }
  }

  if (name) {
    findConfig.where = {
      name: Like("%" + name + "%")
    }
  } else {
    findConfig.skip = offset;
    findConfig.take = 10
  }
  
  const stores = await getRepository(Store).find(findConfig);

  return res.status(200).json({
    status: 'success',
    data: stores
  });
}

export const getStore = async (req: Request, res: Response): Promise<Response> => {

  const store = await getRepository(Store).findOne(req.params.name);

  return res.json(Store);
}