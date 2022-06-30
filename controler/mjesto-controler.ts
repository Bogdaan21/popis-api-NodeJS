import { Request, Response } from 'express';
import { resolve } from 'path';
import mjestoRepositori from '../respository/mjesto-repositori';

const getAllMjesto = async (request: Request, response: Response) => {
    const mjesto = await mjestoRepositori.gettingAllMjesto();
    response.send(mjesto);
}

const getMjestoById = async (request: Request, response: Response) => {
    const result = await mjestoRepositori.getMjestoById(parseInt(request.params.mid));
    response.send(result[0]);
}

const getByArtikal = async (request: Request, response: Response) => {  // ne radi
    const result = await mjestoRepositori.getByArtikal(request.params.broj_kancelarije, parseInt(request.params.aid));
    response.send(result);
}

const insertMjesto = async (request: Request, response: Response) => {
    const result = await mjestoRepositori.insertMjesto(request.body);
    response.send(result);
}

const updateMjesto = async (request: Request, response: Response) => {
    const result = await mjestoRepositori.updateMjesto(request.body, parseInt(request.params.mid));
    response.send(result);
}

const deleteMjesto = async (request: Request, response: Response) => {
    const result = await mjestoRepositori.deleteMjesto(parseInt(request.params.mid));
    response.send(result);
}

export default {getAllMjesto, getMjestoById, getByArtikal, insertMjesto, deleteMjesto, updateMjesto} ;