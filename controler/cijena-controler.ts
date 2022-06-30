import cijenaRespositori from "../respository/cijena-respositori";
import {Request, Response} from 'express'

const getAllCijena = async (request: Request, response: Response) => {
    const result = await cijenaRespositori.getAllCijena();
    response.send(result);
}

const getCijenaById = async (request: Request, response: Response) => {
    const result = await cijenaRespositori.getCijenaById(parseInt(request.params.cid));
    response.send(result[0]);
}

const insertCijena = async (request: Request, response: Response) => {
    const result = await cijenaRespositori.insertCijena(request.body);
    response.send(result);
}

const updateCijena = async (request: Request, response: Response) => {
    const result = await cijenaRespositori.updateCijena(request.body, parseInt(request.params.cid));
    response.send(result);
}

const deleteCijena = async (request: Request, response: Response) => {
    const result = await cijenaRespositori.deleteCijena(parseInt(request.params.cid));
    response.send(result);
}

export default {getAllCijena, getCijenaById, insertCijena, updateCijena, deleteCijena}