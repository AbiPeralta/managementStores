import console from "console";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Coupons } from "../entity/Coupons";


//get all coupons
export const getCoupons = async (req: Request, res: Response): Promise<Response> => {

  const coupons = await getRepository(Coupons).find();

  return res.json(coupons);
}

//get one coupon
export const getCoupon = async (req: Request, res: Response): Promise<Response> => {

  const coupon = await getRepository(Coupons).findOne(req.query);

  if (coupon) {

    return res.status(200).json(coupon);
  }

  return res.status(404).json({ msg: 'Not found' });
}

//create new coupon
export const createCoupon = async (req: Request, res: Response): Promise<Response> => {

  const newCoupon = getRepository(Coupons).create(req.body);

  if (newCoupon.length = 8) {

    const results = await getRepository(Coupons).save(newCoupon);

    return res.status(201).json(results);
  }

  return res.status(422).json({ message: 'Unprocessable Entity' });

}
