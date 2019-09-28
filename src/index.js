import dotenv from 'dotenv';
import express from 'express';
import connectDb from '../db';

dotenv.config();

const app = express();
connectDb().then(() => console.log('Database connected'));
app.listen(process.env.PORT, () => console.log('Server started'));
