import dbConnection from "../conncetion/db-connection";
import { Vrsta } from "../models/vrsta-models";

const getAllVrsta = async () => {
    try {
    const result = await dbConnection.query(`SELECT * FROM vrsta`) 
    return result;
        }
    catch(e) {
        return null;
    }
}

const getVrstaByID = async (vid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM vrsta WHERE vid = ?`, [vid]);
        return result;
        }
    catch(e) {
        return null;
    }
}

const insertVrsta = async (vrsta: Vrsta) => {
    try {
        const result = await dbConnection.query(`INSERT INTO vrsta (tip) VALUES (?)`, [vrsta.tip]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const updateVrsta = async (vrsta: Vrsta, vid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE vrsta SET tip = ? WHERE vid = ?`, [vrsta.tip, vid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const deleteVrsta = async (vid: number) => {
    try {
        const result = await dbConnection.query(`DELETE FROM vrsta WHERE vid = ?`, [vid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

export default { getAllVrsta, getVrstaByID, insertVrsta, updateVrsta, deleteVrsta };