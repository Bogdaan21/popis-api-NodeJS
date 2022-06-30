import dbConnection from "../conncetion/db-connection";
import { Artikal } from "../models/artikal-models";

const gettingAllArtikal = async () => {
    try {
        const result = await dbConnection.query(`SELECT * FROM artikal`);
        return result;
    }
    catch(e) {
        return null;
    }
}

const getArtikalById = async (aid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM artikal WHERE aid = ?`, [aid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const getArtikalByMjesto = async (mid: number) => { // radi
    try {
        const result = await dbConnection.query(`SELECT * FROM artikal WHERE mjesto_id = ?`, [mid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const insertAllArtikal = async (artikal: Artikal) => {
    try {
        const result = await dbConnection.query(`INSERT INTO artikal (model, inventarski_broj_stari, inventarski_broj_novi) VALUE (?, ?, ?)`, [artikal.model, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const updateAllArtikal = async (artikal: Artikal, aid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE artikal SET model = ?, inventarski_broj_stari = ?, inventarski_broj_novi = ? WHERE aid = ?`, [artikal.model, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, aid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const deleteAllArtikal = async (aid: number) => {
    const result =await dbConnection.query(`DELETE FROM artikal WHERE aid = ?`, [aid])
    return result;
}

export default {getArtikalById, gettingAllArtikal, getArtikalByMjesto, insertAllArtikal, updateAllArtikal, deleteAllArtikal}