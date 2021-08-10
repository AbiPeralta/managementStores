import { Router } from 'express';
import couponRoutes  from './couponRoutes';
import storeRoutes from './storeRoutes';
//import statRoutes from './statRoutes';


// Export the base-router
const baseRouter = Router();
baseRouter.use('/coupon', couponRoutes);
baseRouter.use('/store', couponRoutes);
//baseRouter.use('/stat', couponRoutes);
export default baseRouter;
