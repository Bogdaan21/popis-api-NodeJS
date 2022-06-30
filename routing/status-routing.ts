import express from 'express';
import statusControler from '../controler/status-controler';

const router = express.Router();

router.route('/')
    .get(statusControler.getAllStatus)
    .post(statusControler.insertStatus);
router.route('/:sid')
    .get(statusControler.getStatusByID)
    .put(statusControler.updateStatus)
    .delete(statusControler.deleteStatus)
    
export default router;