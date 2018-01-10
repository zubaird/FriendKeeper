const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  res.send('Booyah Friends');
})














module.exports = router;
