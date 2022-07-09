import dbConnection from "../common/db-connection";
import { Status } from "../models/status-models";

const getAllStatus = async () => {
    try {
    const result = await dbConnection.query(`SELECT * FROM status`) 
    return result;
        }
    catch(e) {
        return null;
    }
}

const getStatusByID = async (sid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM status WHERE sid = ?`, [sid]);
        return result;
        }
    catch(e) {
        return null;
    }
}

const insertStatus = async (status: Status) => {
    try {
        const result = await dbConnection.query(`INSERT INTO status (popisano, otpisano, nepopisano) VALUES (?, ?, ?)`, [status.popisano, status.otpisano, status.nepopisano]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const updateStatus = async (status: Status, sid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE status SET popisano = ?, otpisano = ?, nepopisano = ? WHERE sid = ?`, [status.popisano, status.otpisano, status.nepopisano, sid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const deleteStatus = async (sid: number) => {
    try {
        const result = await dbConnection.query(`DELETE FROM status WHERE sid = ?`, [sid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

export default { getAllStatus, getStatusByID, insertStatus, updateStatus, deleteStatus };