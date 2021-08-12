
import { Router } from "express";
import { 
  storeList, 
  createStore, 
  deleteStore
} from '../controllers/StoresController';
const router = Router();

export default router;

router.get('/ping', (req, res) => {
  res.json({
    data: 'pong'
  });
});

router.get('/list', storeList);

router.post('/create',createStore);

router.delete('/delete/:id',deleteStore);
