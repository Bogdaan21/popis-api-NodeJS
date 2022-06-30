import express from 'express'
import vrstaControler from '../controler/vrsta-controler'

const router = express.Router();

router.route('/')
    .get(vrstaControler.getAllVrsta)
    .post(vrstaControler.insertVrsta);

router.route('/:vid')
    .get(vrstaControler.getVrstaByID)
    .put(vrstaControler.updateVrsta)
    .delete(vrstaControler.deleteVrsta);

export default router;
