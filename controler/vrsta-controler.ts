import { Request, Response } from 'express';
import vrstaRespository from '../respository/vrsta-respository';

const getAllVrsta = async (request: Request, response: Response) => {
    const result = await vrstaRespository.getAllVrsta();
    response.send(result);
}

const getVrstaByID = async (request: Request, response: Response) => {
    const result = await vrstaRespository.getVrstaByID(parseInt(request.params.vid));
    response.send(result);
}

const insertVrsta = async (request: Request, response: Response) => {
    const result = await vrstaRespository.insertVrsta(request.body);
    response.send(result);
}

const updateVrsta = async (request: Request, response: Response) => {
    const result = await vrstaRespository.updateVrsta(request.body, parseInt(request.params.vid));
    response.send(result);
}

const deleteVrsta = async (request: Request, response: Response) => {
    const result = await vrstaRespository.deleteVrsta(parseInt(request.params.vid));
    response.send(result);
}

export default {getAllVrsta, getVrstaByID, insertVrsta, updateVrsta, deleteVrsta}