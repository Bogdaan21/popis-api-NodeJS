import express from "express";
import imenikControler from "../controler/imenik-controler";

const router = express.Router();

router.route('/')
    .get(imenikControler.getAllImenik)
    .post(imenikControler.insertImenik);

router.route ('/:imenikid')
    .get(imenikControler.getImenikByID)
    .put(imenikControler.updateImenik)
    .delete(imenikControler.deleteImenik);


export default router;