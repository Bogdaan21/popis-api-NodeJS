import express from 'express'

import artikalControler from '../controler/artikal-controler';

const router = express.Router();


router.route('/')
    .get(artikalControler.gettingAllArtikal)
    .post(artikalControler.insertAllArtikal);

router.route('/getArtikalByMjesto/:mid') // ne radi
    .get(artikalControler.getArtikalByMjesto);

router.route('/:aid')
    .get(artikalControler.getArtikalById)
    .put(artikalControler.updateAllArtikal)
    .delete(artikalControler.deleteAllArtikal);


export default router;