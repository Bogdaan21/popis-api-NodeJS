import 'reflect-metadata'
import express from 'express'
import dbConnection from './common/db-connection';
import artikalRouter from './routing/artikal-routing';
import mjestoRouter from './routing/mjesto-routing';
import statusRouter from './routing/status-routing';
import vrstaRouter from './routing/vrsta-routing';
import imenikRouter from './routing/imenik-routing';
import direkttoratRouter from './routing/direktorat-routing';
import cors from 'cors';
import path from "path";
import fileUploadRouter from './common/file-upload';
let app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public', 'uploads')));

app.use('/artikal', artikalRouter);
app.use('/mjesto', mjestoRouter);
app.use('/status', statusRouter);
app.use('/vrsta', vrstaRouter);
app.use('/imenik', imenikRouter);
app.use('/direktorat', direkttoratRouter);

app.use(fileUploadRouter);

app.listen(7000, () => {
    console.log('Server is connected at port 7000');
})

dbConnection.initialize()
    .then(() => {console.log('Connection to DB') })
    .catch((err) => {console.log('Error', err) })