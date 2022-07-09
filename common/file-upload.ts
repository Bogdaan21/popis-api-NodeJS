import multer from "multer";
import express from "express";
import path from "path";
import { Request, Response } from "express";

const storage = multer.diskStorage({
    destination: (req, file, callback) => { 
        callback(null, path.join(__dirname, '..', 'public', 'uploads'));
    },
    filename: (req, file, callback) => { 
        callback(null,`${Date.now()}-${file.originalname}`); 
    } 
})

let fileUpload = multer({storage}) 

const fileUploadRouter = express.Router(); 

fileUploadRouter.post('/upload', fileUpload.single('img'), (request: Request, response: Response) =>{  
if(!request.file) {
    response.send({
        status: -1, 
        msg: 'No file uploade!'
    })
} 
    else {
        response.send({ 
            status: 0,
            msg: 'file uploade!',
            fileName: request.file.filename
        })
    }
})

export default fileUploadRouter;