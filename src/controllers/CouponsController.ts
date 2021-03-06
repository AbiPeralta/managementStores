import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Coupon } from "../entities/Coupon";

//get all coupons
export const couponList = async (req: Request, res: Response): Promise<Response> => {

  const coupons = await getRepository(Coupon).find();

  return res.status(200).json({
    status: 'success',
    data: coupons
  });
}

//get one coupon
export const getCoupon = async (req: Request, res: Response): Promise<Response> => {
  const {
    email,
    code
  } = req.query;

  try {
    const coupon = await getRepository(Coupon).findOne({
      code,
      customerEmail: email
    });

    if (!coupon) {
      throw new Error('Coupon Not found');
    }

    return res.status(200).json({
      status: 'success',
      data: coupon
    });
  } catch (error) {
    return res.status(404).json({
      status: 'error',
      message: error.message
    });
  }
}

//create new coupon
export const createCoupon = async (req: Request, res: Response): Promise<Response> => {
  const {
    code
  } = req.body;

  try {
    if (code.length !== 8) {
      throw new Error('The code must have 8 characters.');
    }

    if (!/[0-9a-z]+/i.test(code)) {
      throw new Error('The code must contain letters and numbers.');
    }

    const newCoupon = getRepository(Coupon).create({
      code,
      customerEmail: '',
      address: ''
    });

    const results = await getRepository(Coupon).save(newCoupon);

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

//update coupon
export const editCoupon = async (req: Request, res: Response): Promise<Response> => {
  const { code } = req.params;
  const { email } = req.body;
  const couponRepository = getRepository(Coupon);
  try {
    if (!email) {
      throw Error('The email address is mandatory.');
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      throw Error('The email address has a wrong format.');
    }

    const coupon = await couponRepository.findOne({
      code
    });

    if (!coupon) {
      throw Error('The coupon with the code provided doesn\'t exists.');
    }

    coupon.customerEmail = email;

    couponRepository.save(coupon);
  
    return res.status(201).json({
      status: 'success',
      data: coupon
    }); 
  } catch (error) {
    return res.status(422).json({
      status: 'error',
      message: error.message
    });
  }
}

//delete coupon
export const deleteCoupon = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const couponRepository = getRepository(Coupon);

  try {
    const coupon = await couponRepository.findOne(id);
    
    if (!coupon) {
      throw new Error('Coupon Not found');
    }

    couponRepository.delete(coupon);
    
    return res.status(201).json({
      status: 'success',
      data: coupon
    }); 
  } catch (error) {
    return res.status(404).json({ 
      status: 'error',
      message: error.message
    });
  }
}