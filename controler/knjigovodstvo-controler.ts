import {Request, Response} from 'express'
import knjigovodstvoRepositori from '../respository/knjigovodstvo-repositori'

const getAllKnjigovodstvo = async (request: Request, respone: Response) => {
    const result = await knjigovodstvoRepositori.getAllKnjigovodstvo();
    respone.send(result);
}

const getKnjigovodstvoById = async (request: Request, response: Response) => {
    const result = await knjigovodstvoRepositori.getKnjigovodstvoById(parseInt(request.params.kid));
    response.send(result);
}

const insertKnjigovodstvo = async (request: Request, response: Response) => {
    const result = await knjigovodstvoRepositori.insertKnjigovodstvo(request.body);
    response.send(result);
}

const updateKnjigovodstvo = async (request: Request, response: Response) => {
    const result = await knjigovodstvoRepositori.updateKnjigovodstvo(request.body, parseInt(request.params.kid));
    response.send(result);
}

const deteleKnjigovodstvo = async (request: Request, response: Response) => {
    const result = await knjigovodstvoRepositori.deteleKnjigovodstvo(parseInt(request.params.kid));
    response.send(result);
}

export default { getAllKnjigovodstvo, getKnjigovodstvoById, insertKnjigovodstvo, updateKnjigovodstvo, deteleKnjigovodstvo };