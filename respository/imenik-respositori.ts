import dbConnection from "../common/db-connection";
import { Imenik} from "../models/imenik-models";

const getAllImenik = async () => {
    try {
    const result = await dbConnection.query(`SELECT * FROM imenik`) 
    return result;
        }
    catch(e) {
        return null;
    }
}

const getImenikByID = async (imenikid: number) => {
    try {
        const result = await dbConnection.query(`SELECT * FROM imenik WHERE imenikid = ?`, [imenikid]);
        return result;
        }
    catch(e) {
        return null;
    }
}

const insertImenik = async (imenik: Imenik) => {

        const result = await dbConnection.query(`INSERT INTO imenik (broj_lokala, ime_prezime, broj_kancelarije, organizaciona_jedinica) VALUES (?, ?, ?, ?)`, [imenik.broj_lokala, imenik.ime_prezime, imenik.broj_kancelarije, imenik.organizaciona_jedinica]);
        return result;

}

const updateImenik = async (imenik: Imenik, imenikid: number) => {
    try {
        const result = await dbConnection.query(`UPDATE imenik SET broj_lokala = ?, ime_prezime = ?, broj_kancelarije = ?, organizaciona_jedinica = ? WHERE imenikid = ?`, [imenik.broj_lokala, imenik.ime_prezime, imenik.broj_kancelarije, imenik.organizaciona_jedinica, imenikid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

const deleteImenik = async (imenikid: number) => {
    try {
        const result = await dbConnection.query(`DELETE FROM imenik WHERE imenikid = ?`, [imenikid]);
        return result;
    }
    catch(e) {
        return null;
    }
}

export default { getAllImenik, getImenikByID, insertImenik, updateImenik, deleteImenik };