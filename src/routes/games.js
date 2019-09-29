import { Router } from 'express';
import { Game } from '../../db';

const router = Router();

router.post('/', async (req, res) => {
  const { winner } = req.body.game;
  const game = new Game({
    winner: winner.name
  });
  await game.save();
  res.json({ game });
});

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const games = await Game.find({ winner: name });
  res.json({ games, count: games.length });
});

export default router;
