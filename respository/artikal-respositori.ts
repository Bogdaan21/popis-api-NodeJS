import dbConnection from "../common/db-connection";
import { Artikal } from "../models/artikal-models";

const gettingAllArtikal = async () => {
    try {
        const result = await dbConnection.query(`SELECT a.*, c.*, m.*, k.*, v.*, s.*
                                                                        FROM artikal a, cijena c, mjesto m, knjigovodstvena_evidencija k, vrsta v, status s
                                                                                WHERE a.cijena_id = c.cid
                                                                                AND a.mjesto_id = m.mid
                                                                                AND a.knjigovodstvena_evidencija_id = k.kid
                                                                                AND a.vrsta_id = v.vid
                                                                                AND k.status_id = s.sid
                                                                                `);
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
        const result = await dbConnection.query(`INSERT INTO artikal (model, zaduzenje, inventarski_broj_stari, inventarski_broj_novi, cijena_id, knjigovodstvena_evidencija_id, mjesto_id, vrsta_id, putanjaslike) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [artikal.model, artikal.zaduzenje, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, artikal.cijena_id, artikal.knjigovodstvena_evidencija_id, artikal.mjesto_id, artikal.vrsta_id, artikal.putanjaslike]);
        return result;
    }
    catch(e) {
        console.log(e);
        return null;
    }
}

const updateAllArtikal = async (artikal: Artikal, aid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE artikal SET model = ?,zaduzenje = ?, inventarski_broj_stari = ?, inventarski_broj_novi = ?, cijena_id = ?, knjigovodstvena_evidencija_id = ?, mjesto_id = ?, vrsta_id = ? WHERE aid = ?, putanjaslike = ?`, [artikal.model,artikal.zaduzenje, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, artikal.cijena_id, artikal.knjigovodstvena_evidencija_id, artikal.mjesto_id, artikal.vrsta_id, aid, artikal.putanjaslike]);
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