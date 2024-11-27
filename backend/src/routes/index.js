import express from 'express';
const router = express.Router();

import slotRoute from './slots.js';

const routes = () => {
router.use('/', slotRoute);
return router;
};

export default routes;