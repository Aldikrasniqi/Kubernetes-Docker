import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; //To connect with database
import cors from 'cors';
import dotenv from 'dotenv';
import { getUsers, addUser } from './controllers/user.js';
// router = require('./routes/user.js');

const app = express(); 
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

app.post('/user', addUser);
app.get('/user', getUsers);

const URL = process.env.MONGODB_URL;


mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb conncetion success!");
});

app.listen(PORT, () => {
    console.log('Server is up and running on port: ' + PORT);
})