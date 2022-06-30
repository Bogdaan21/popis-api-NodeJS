import express from 'express';
import knjigovodstvoControler from '../controler/knjigovodstvo-controler';

const router = express.Router();

router.route('/')
    .get(knjigovodstvoControler.getAllKnjigovodstvo)
    .post(knjigovodstvoControler.insertKnjigovodstvo)
router.route('/:kid')
    .get(knjigovodstvoControler.getKnjigovodstvoById)
    .put(knjigovodstvoControler.updateKnjigovodstvo)
    .delete(knjigovodstvoControler.deteleKnjigovodstvo)

export default router;

