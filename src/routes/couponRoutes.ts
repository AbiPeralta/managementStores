import { Router } from "express";
import {
  cuponList, 
  getCoupon, 
  createCoupon, 
  editCoupon, 
  deleteCoupon
} from '../controllers/CouponsController';
const router = Router();

router.get('/ping', (req, res) => {
  res.json({
    data: 'pong'
  });
});

// solicita 'email' y 'code' en el query string
router.get('/check', getCoupon);

router.get('/list', cuponList);

router.post('/create', createCoupon);

// assing user email to coupon
router.patch('/edit/:code', editCoupon);

router.delete('/coupons/:id', deleteCoupon);

export default router;
