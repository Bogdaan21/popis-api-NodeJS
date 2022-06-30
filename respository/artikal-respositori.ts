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

const getArtikalByMjesto = async (mid: number) => { // ne radi
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
        const result = await dbConnection.query(`INSERT INTO artikal (naziv, vrsta, inventarski_broj) VALUE (?, ?, ?)`, [artikal.naziv, artikal.vrsta, artikal.inventarski_broj]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const updateAllArtikal = async (artikal: Artikal, aid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE artikal SET naziv = ?, vrsta = ?, inventarski_broj = ? WHERE aid = ?`, [artikal.naziv, artikal.vrsta, artikal.inventarski_broj, aid]);
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