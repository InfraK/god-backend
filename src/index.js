import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDb from '../db';
import { leaderboard, games } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/leaderboard', leaderboard);
app.use('/games', games);

connectDb().then(() => console.log('Database connected'));

app.listen(process.env.PORT, () => console.log('Server started'));
