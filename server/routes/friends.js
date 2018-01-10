const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('friends').returning('*')
  .then(friends => res.json(friends))
})

router.get('/:id', (req, res, next) => {
  knex('friends')
    .where({id: req.params.id})
    .first()
    .then(friend => res.json(friend))
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  knex('friends')
    .insert(req.body)
    .returning('*')
    .then(friends => res.json(friends))
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  knex('friends')
    .del()
    .where({id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})














module.exports = router;
