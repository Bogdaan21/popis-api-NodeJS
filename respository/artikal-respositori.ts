
import dbConnection from "../common/db-connection";
import { Artikal } from "../models/artikal-models";

const gettingAllArtikal = async () => {

        const result = await dbConnection.query(`SELECT a.aid, a.model, a.zaduzenje, a.inventarski_broj_stari, a.inventarski_broj_novi,
                                                        a.nabavna_cijena, a.sadasnja_vrijednost, a.godina_nabavke,
                                                        m.sprat, m.broj_kancelarije, m.napomena,
                                                        v.tip, v.konto,
                                                        s.naziv
                                                 FROM artikal a, mjesto m, vrsta v, status s
                                                 WHERE a.mjesto_id = m.mid
                                                         AND a.vrsta_id = v.vid
                                                         AND a.status_id = s.sid
                                                         `);
        return result;
}

const getArtikalById = async (aid: number) => {
    try {
        const result = await dbConnection.query(`SELECT a.aid, a.model, a.zaduzenje, a.inventarski_broj_stari, a.inventarski_broj_novi,
                                                        a.nabavna_cijena, a.sadasnja_vrijednost, a.godina_nabavke,
                                                        m.sprat, m.broj_kancelarije, m.napomena,
                                                        v.tip, v.konto,
                                                        s.naziv
                                                 FROM artikal a, mjesto m, vrsta v, status s 
                                                 WHERE aid = ?`, [aid]);
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

        const result = await dbConnection.query(`INSERT INTO artikal (model, zaduzenje, inventarski_broj_stari, inventarski_broj_novi, nabavna_cijena, sadasnja_vrijednost, godina_nabavke, mjesto_id, vrsta_id, status_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                                                [artikal.model, artikal.zaduzenje, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, artikal.nabavna_cijena, artikal.sadasnja_vrijednost, artikal.godina_nabavke, artikal.mjesto_id, artikal.vrsta_id, artikal.status_id]);
        return result;


}

const updateAllArtikal = async (artikal: Artikal, aid: number) => {
    try {

    //     let cijena = await dbConnection.query(`SELECT id FROM cijena WHERE nabavna_cijena = ?`, [artikal.nabavna_cijena]);
    //    return cijena;
    //     if(cijena == null){
    //         cijena = await dbConnection.query(`INSERT INTO cijena ( nabavna_cijana `),[artikal.nabavna_cijena]
    //     }

        const result = await dbConnection.query(`UPDATE artikal SET model = ?,zaduzenje = ?, inventarski_broj_stari = ?, inventarski_broj_novi = ?, nabavna_cijena = ?, sadasnja_vrijednost = ?, godina_nabavke = ?, mjesto_id = ?, vrsta_id = ?, status_id = ? WHERE aid = ?`, 
                                                [artikal.model,artikal.zaduzenje, artikal.inventarski_broj_stari, artikal.inventarski_broj_novi, artikal.nabavna_cijena, artikal.sadasnja_vrijednost, artikal.godina_nabavke, artikal.mjesto_id, artikal.vrsta_id, artikal.status_id, aid]);
        return result;
    }
    catch(e) {
        console.log(e);
        return null;
    }
    }


const deleteAllArtikal = async (aid: number) => {
    const result =await dbConnection.query(`DELETE FROM artikal WHERE aid = ?`, [aid])
    return result;
}

export default {getArtikalById, gettingAllArtikal, getArtikalByMjesto, insertAllArtikal, updateAllArtikal, deleteAllArtikal}