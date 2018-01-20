
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table)=>{
    table.increments();
    table.string('name');
    table.string('phone_number');
    table.string('email');
    table.string('birthday');
    table.string('anniversary');
    table.integer('date_added');
    table.integer('email_interval');
    table.integer('phone_interval');
    table.integer('text_interval');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
