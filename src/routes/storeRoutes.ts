
import { Router } from "express";
import { storeList, getStore,createStore ,deleteStore} from '../controllers/StoresController';
const router = Router();

export default router;

router.get('/ping', (req, res) => {
  res.json({
    data: 'pong'
  });
});

router.get('/list', storeList);

router.get('view/:name', getStore);

router.post('/create',createStore);

router.delete('/delete/:id',deleteStore);
