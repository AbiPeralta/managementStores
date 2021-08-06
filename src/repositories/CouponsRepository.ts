import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Coupons } from "../entity/Coupons";


export const getCoupons = async (req: Request, res: Response): Promise<Response> => {

    const coupons = await getRepository(Coupons).find();
  
    return res.json(coupons);
  }

  export const getCoupon= async (req: Request, res: Response): Promise<Response> => {

    const Coupon = await getRepository(Coupons).findOne(req.params.customer_email);
  
    return res.json(Coupon);
  }