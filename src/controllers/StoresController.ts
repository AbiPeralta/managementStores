
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

  return res.json(store);
}



export const createStore = async (req: Request, res: Response): Promise<Response> => {
  const{
    address,
    name
  } = req.body;
  const storeRepository = getRepository(Store);
  try {
    if (!address) {
      throw Error('The code must contain address.');
    }

    if (!name) {
      throw Error('The code must contain name');
    }

    const newStore =  storeRepository.create({
      address,
      name
    });

    const results = await storeRepository.save(newStore);


    return res.status(201).json({
      status: 'success',
      data: results
    }); 
  } catch (error) {
    return res.status(422).json({
      status: 'error',
      message: error.message
    });
  }
 

  
  }


  



//delete store
export const deleteStore = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const storeRepository = getRepository(Store);

  try {
    const store = await storeRepository.findOne(id);

    if (!store) {
      throw new Error('Coupon Not found');
    }

    storeRepository.delete(store);

    return res.status(201).json({
      status: 'success',
      data: store
    });
  } catch (error) {
    return res.status(404).json({
      status: 'error',
      message: error.message
    });
  }
}