import dbConnection from "../common/db-connection";
import { Artikal } from "../models/artikal-models";

const gettingAllArtikal = async () => {
    try {
        const result = await dbConnection.query(`SELECT a.aid, a.model, a.zaduzenje, a.inventarski_broj_stari, a.inventarski_broj_novi, 
                                                c.cid, c.nabavna_cijena, c.sadasnja_vrijednost, 
                                                k.kid, k.godina_nabavke, 
                                                m.mid, m.sprat, m.broj_kancelarije, m.napomena, 
                                                v.vid, v.tip, v.konto, 
                                                s.sid, s.popisano, s.otpisano, s.nepopisano 
                                                FROM artikal a, cijena c, knjigovodstvena_evidencija k, mjesto m, vrsta v, status s`);
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