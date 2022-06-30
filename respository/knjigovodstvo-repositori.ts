import dbConnection from "../conncetion/db-connection"
import { Knjigovodstvena_evidencija } from "../models/knjigovodstvo-models";

const getAllKnjigovodstvo = async () => {
try {
    const result = dbConnection.query('SELECT * FROM knjigovodstvena_evidencija');
    return result;
    }
catch(e) {
    return null;
    }
}

const getKnjigovodstvoById = async (kid: number) => {
    try {
        const result = dbConnection.query(`SELECT * FROM knjigovodstvena_evidencija`, [kid]);
        return result;
    }
catch(e) {
    return null;
    }
}

const insertKnjigovodstvo = async (knjigovodstvena_evidencija: Knjigovodstvena_evidencija) => {
    try {
        const result = dbConnection.query(`INSERT INTO knjigovodstvena_evidencija (konto, god_nabavke, popisano, nepopisano, otpisano) VALUE (?, ?, ?, ?, ?)`, [knjigovodstvena_evidencija.god_nabavke, knjigovodstvena_evidencija.konto, knjigovodstvena_evidencija.nepopisano, knjigovodstvena_evidencija.popisano, knjigovodstvena_evidencija.otpisano])
        return result;
    }
catch(e) {
    return null;
    }
}

const updateKnjigovodstvo = async (knjigovodstvena_evidencija: Knjigovodstvena_evidencija, kid: number) => {
    try {
        const result = dbConnection.query(`UPDATE knjigovodstvena_evidencija SET konto = ?, god_nabavke = ?, popisano = ?, nepopisano = ?, otpisano = ? WHERE kid = ?`, [knjigovodstvena_evidencija.god_nabavke, knjigovodstvena_evidencija.konto, knjigovodstvena_evidencija.popisano, knjigovodstvena_evidencija.nepopisano, knjigovodstvena_evidencija.otpisano, kid])
        return result;
    }
catch(e) {
    return null;
    }
}

const deteleKnjigovodstvo = async (kid: number) => {
    try {
        const result = dbConnection.query(`DELETE FROM knjigovodstvena_evidencija WHERE kid = ?`, [kid]);
        return result;
    }
catch(e) {
    return null;
    }
}

export default {getAllKnjigovodstvo, getKnjigovodstvoById, insertKnjigovodstvo, updateKnjigovodstvo, deteleKnjigovodstvo}