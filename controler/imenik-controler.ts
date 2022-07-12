import { Request, Response } from "express";
import imenikRespositori from "../respository/imenik-respositori";

const getAllImenik = async (request: Request, response: Response) => {
    const result = await imenikRespositori.getAllImenik();
    response.send(result);
}

const getImenikByID = async (request: Request, response: Response) => {
    const result = await imenikRespositori.getImenikByID(parseInt(request.params.imenikid));
    response.send(result[0]);
}

const insertImenik = async (request: Request, response: Response) => {
    const result = await imenikRespositori.insertImenik(request.body);
    response.send(result);
}

const updateImenik = async (request: Request, response: Response) => {
    const result = await imenikRespositori.updateImenik(request.body, parseInt(request.params.imenikid));
    response.send(result);
}

const deleteImenik = async (request: Request, response: Response) => {
    const result = await imenikRespositori.deleteImenik(parseInt(request.params.imenikid));
    response.send(result);
}

export default {getAllImenik, getImenikByID, insertImenik, updateImenik, deleteImenik}