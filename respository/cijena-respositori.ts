import dbConnection from "../common/db-connection";
import { Cijena } from "../models/cijena-models";

const getAllCijena = async () => {
    try {
        const result = await dbConnection.query(`SELECT * FROM cijena`);
        return result;
    }
    catch(e) {
        return null;
    }
}

const getCijenaById = async (cid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM cijena WHERE cid = ?`, [cid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const insertCijena = async (cijena: Cijena) => {
    try {
        const result = await dbConnection.query(`INSERT INTO cijena (nabavna_cijena, sadasnja_vrijednost) VALUES (?, ?)`, [cijena.nabavna_cijena, cijena.sadasnja_vrijednost]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const updateCijena = async (cijena: Cijena, cid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE cijena SET nabavna_cijena = ?, sadasnja_vrijednost = ? AND cid = ?`, [cijena.nabavna_cijena, cijena.sadasnja_vrijednost, cid]);
        return result;
}
catch(e) {
    return null;
    }
}

const deleteCijena = async (cid: number) => {
        const result = await dbConnection.query(`DELETE FROM cijena WHERE cid = ?`, [cid]);
        return result;
}

export default {getAllCijena, getCijenaById, insertCijena, updateCijena, deleteCijena}