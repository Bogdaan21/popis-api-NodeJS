import express from 'express'
import mjestoControler from '../controler/mjesto-controler';

const router = express.Router();

router.route('/')
    .get(mjestoControler.getAllMjesto)
    .post(mjestoControler.insertMjesto);

router.route ('/:mid')
    .get(mjestoControler.getMjestoById)
    .put(mjestoControler.updateMjesto)
    .delete(mjestoControler.deleteMjesto);


export default router;