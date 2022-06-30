import express from 'express';
import cijenaControler from "../controler/cijena-controler";

const router = express.Router();

router.route('/')
    .get(cijenaControler.getAllCijena)
    .post(cijenaControler.insertCijena);
router.route('/:cid')
    .get(cijenaControler.getCijenaById)
    .put(cijenaControler.updateCijena)
    .delete(cijenaControler.deleteCijena)
    
export default router;