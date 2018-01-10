const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('friends').returning('*')
  .then(friends => res.json(friends))

})














module.exports = router;
