import dbConnection from "../conncetion/db-connection";
import { Mjesto } from "../models/mjesto-models";

const gettingAllMjesto = async () => {
    try {
        const result = await dbConnection.query(`SELECT * FROM mjesto`);
        return result;
    }
    catch(e) {
        return null;
    }
}

const getMjestoById = async (mid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM mjesto WHERE mid = ?`, [mid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const getByArtikal = async (broj_kancelarije: string, aid: number) => {
    try {
        const result = await dbConnection.query(`SELECT FROM artikal WHERE broj_kancelarije = ?`, [broj_kancelarije, aid]);
        return result
    }
    catch (e) {
        return null;
    }
}

const insertMjesto = async (mjesto: Mjesto) => {
    try {
        const result = await dbConnection.query(`INSERT INTO mjesto (sprat, broj_kancelarije, napomena) VALUES (?, ?, ?)`, [mjesto.sprat, mjesto.broj_kancelarije, mjesto.napomena]);
        return result;
    }
    catch (e) {
        return null;
    }
}

const updateMjesto = async (mjesto: Mjesto, mid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE mjesto SET sprat = ?, broj_kancelarije = ?, napomena = ? WHERE mid = ?`, [mjesto.sprat, mjesto.broj_kancelarije, mjesto.napomena, mid]);
        return result;
    }
    catch (e) {
        return null;
    }
}

const deleteMjesto = async (mid: number) => {
        const result = await dbConnection.query(`DELETE FROM mjesto WHERE mid = ?`, [mid]);
        return result;
}

export default {gettingAllMjesto, getMjestoById, getByArtikal, insertMjesto, updateMjesto, deleteMjesto};