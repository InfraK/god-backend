import { Router } from 'express';
import { Game } from '../../db';

const router = Router();

router.post('/', (req, res) => {
  try {
    const { winner } = req.body.game;
    const game = new Game({
      winner: winner.name
    });
    game.save();
    res.json({ game });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

export default router;
