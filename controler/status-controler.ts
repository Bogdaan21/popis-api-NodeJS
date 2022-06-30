import {Request, Response} from 'express'
import statusResporitori from '../respository/status-resporitori'

const getAllStatus = async (request: Request, response: Response) => {
    const result = await statusResporitori.getAllStatus();
    response.send(result);
}

const getStatusByID = async (request: Request, response: Response) => {
    const result = await statusResporitori.getStatusByID(parseInt(request.params.sid));
    response.send(result);
}

const insertStatus = async (request: Request, response: Response) => {
    const result = await statusResporitori.insertStatus(request.body);
    response.send(result);
}

const updateStatus = async (request: Request, response: Response) => {
    const result = await statusResporitori.updateStatus(request.body, parseInt(request.params.sid));
    response.send(result);
}

const deleteStatus = async (request: Request, response: Response) => {
    const result = await statusResporitori.deleteStatus(parseInt(request.params.sid));
    response.send(result);
}

export default {getAllStatus, getStatusByID, insertStatus, updateStatus, deleteStatus}