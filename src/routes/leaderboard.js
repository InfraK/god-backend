import { Router } from 'express';
import { Game } from '../../db';

const router = Router();

router.get('/', async (req, res) => {
  const games = await Game.aggregate([
    { $group: { _id: '$winner', count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ]);
  res.json({ games });
});

export default router;
