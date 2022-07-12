import dbConnection from "../common/db-connection";
import { Direktorat } from "../models/direktorat-models";

const getAllDirektorat = async () => {
    try {
        const result = await dbConnection.query(`SELECT * FROM direktorat`);
        return result;
    }
    catch(e) {
        return null;
    }
}

const getDirektoratById = async (direktoratid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM direktorat WHERE direktoratid = ?`, [direktoratid]);
        return result;
    }
    catch(e) {
        return null;
    }
}


const insertDirektorat = async (direktorat: Direktorat) => {

        const result = await dbConnection.query(`INSERT INTO direktorat (naziv_direktorata, opis_direktorata, slika_direktorata) VALUES (?, ?, ?)`, [direktorat.naziv_direktorata, direktorat.opis_direktorata, direktorat.slika_direktorata]);
        return result;
    }


const updateDirektorat = async (direktorat: Direktorat, direktoratid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE direktorat SET direktoratid = ?, naziv_direktorata = ?, opis_direktorata = ?, slika_direktorata = ? WHERE direktoratid = ?`, [direktorat.direktoratid, direktorat.naziv_direktorata, direktorat.opis_direktorata, direktorat.slika_direktorata, direktoratid]);
        return result;
    }
    catch (e) {
        return null;
    }
}

const deleteDirektorat = async (direktoratid: number) => {
        const result = await dbConnection.query(`DELETE FROM direktorat WHERE direktoratid = ?`, [direktoratid]);
        return result;
}

export default {getAllDirektorat, getDirektoratById, insertDirektorat, updateDirektorat, deleteDirektorat};