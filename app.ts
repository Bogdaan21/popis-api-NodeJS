import 'reflect-metadata'
import express from 'express'
import dbConnection from './conncetion/db-connection';
import artikalRouter from './routing/artikal-routing';
import mjestoRouter from './routing/mjesto-routing';
import cijenaRouter from './routing/cijena-routing';
import knjigovodstvoRouter from './routing/knjigovodstvo-routing';
import statusRouter from './routing/status-routing';
import vrstaRouter from './routing/vrsta-routing';
let app = express();

app.use(express.json());

app.use('/artikal', artikalRouter);
app.use('/mjesto', mjestoRouter);
app.use('/cijena', cijenaRouter);
app.use('/knjigovodstvo', knjigovodstvoRouter);
app.use('/status', statusRouter);
app.use('/vrsta', vrstaRouter);

app.listen(7000, () => {
    console.log('Server is connected at port 7000');
})

dbConnection.initialize()
    .then(() => {console.log('Connection to DB') })
    .catch((err) => {console.log('Error', err) })