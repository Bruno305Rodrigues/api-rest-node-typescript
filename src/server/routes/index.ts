import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get('/teste', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Teste!');
});


export { router };