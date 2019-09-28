import mongoose from 'mongoose';

export const gameSchema = new mongoose.Schema({
  winner: { type: String, required: true }
});

const Game = mongoose.model('Game', gameSchema);
export default Game;
