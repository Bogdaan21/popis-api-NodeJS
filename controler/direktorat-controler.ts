import { Request, Response } from "express";
import direktoratiRespositori from "../respository/direktorati-respositori";

const getAllDirektorat = async (request: Request, response: Response) => {
    const result = await direktoratiRespositori.getAllDirektorat();
    response.send(result);
}

const getDirektoratById = async (request: Request, response: Response) => {
    const result = await direktoratiRespositori.getDirektoratById(parseInt(request.params.direktoratid));
    response.send(result[0]);
}

const insertDirektorat = async (request: Request, response: Response) => {
    const result = await direktoratiRespositori.insertDirektorat(request.body);
    response.send(result);
}

const updateDirektorat = async (request: Request, response: Response) => {
    const result = await direktoratiRespositori.updateDirektorat(request.body, parseInt(request.params.direktoratid));
    response.send(result);
}

const deleteDirektorat = async (request: Request, response: Response) => {
    const result = await direktoratiRespositori.deleteDirektorat(parseInt(request.params.direktoratid));
    response.send(result);
}

export default {getAllDirektorat, getDirektoratById, insertDirektorat, updateDirektorat, deleteDirektorat}