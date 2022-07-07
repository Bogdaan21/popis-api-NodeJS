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
        console.log(artikal);
        const result = await dbConnection.query(`INSERT INTO artikal (model, zaduzenje, inventarski_broj_stari, inventarski_broj_novi, cijena_id, knjigovodstvena_evidencija_id, mjesto_id, vrsta_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?)`, [artikal.model, artikal.zaduzenje, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, artikal.cijena_id, artikal.knjigovodstvena_evidencija_id, artikal.mjesto_id, artikal.vrsta_id]);
        return result;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

const updateAllArtikal = async (artikal: Artikal, aid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE artikal SET model = ?,zaduzenje = ?, inventarski_broj_stari = ?, inventarski_broj_novi = ?, cijena_id = ?, knjigovodstvena_evidencija_id = ?, mjesto_id = ?, vrsta_id = ? WHERE aid = ?`, [artikal.model,artikal.zaduzenje, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, artikal.cijena_id, artikal.knjigovodstvena_evidencija_id, artikal.mjesto_id, artikal.vrsta_id, aid]);
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