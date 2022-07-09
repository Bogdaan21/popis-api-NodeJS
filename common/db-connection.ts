import { DataSource } from 'typeorm' 

export const dbConnection = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'popis'
})

export default dbConnection;