import express from 'express'
import direktoratControler from '../controler/direktorat-controler';

const router = express.Router();

router.route('/')
    .get(direktoratControler.getAllDirektorat)
    .post(direktoratControler.insertDirektorat);

router.route('/:direktoratid')
    .get(direktoratControler.getDirektoratById)
    .put(direktoratControler.updateDirektorat)
    .delete(direktoratControler.deleteDirektorat);

export default router;
