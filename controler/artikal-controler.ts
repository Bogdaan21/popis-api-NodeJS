import { Request, Response } from "express";
import artikalRespositori from "../respository/artikal-respositori";

const gettingAllArtikal = async (request: Request, response: Response) => {
    const result = await artikalRespositori.gettingAllArtikal();
    response.send(result);
}

const getArtikalById = async (request: Request, response: Response) => {
    const result = await artikalRespositori.getArtikalById(parseInt(request.params.aid));
    response.send(result[0]);
}

const getArtikalByMjesto = async (request: Request, response: Response) => { 
    const result = await artikalRespositori.getArtikalByMjesto(parseInt(request.params.mid));
    response.send(result);
}

const insertAllArtikal = async (request: Request, response: Response) => {
    const result = await artikalRespositori.insertAllArtikal(request.body);
    response.send(result);
}

const updateAllArtikal = async (request: Request, response: Response) => {
    const result = await artikalRespositori.updateAllArtikal(request.body, parseInt(request.params.aid));
    response.send(result);
}

const deleteAllArtikal = async (request: Request, response: Response) => {
    const result = await artikalRespositori.deleteAllArtikal(parseInt(request.params.aid));
    response.send(result);
}

export default {gettingAllArtikal, insertAllArtikal, getArtikalByMjesto, updateAllArtikal, deleteAllArtikal, getArtikalById}