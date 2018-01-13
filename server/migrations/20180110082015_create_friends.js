
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table)=>{
    table.increments();
    table.string('name').notNullable();
    table.string('phone_number').notNullable();
    table.string('email');
    table.date('birthday');
    table.date('anniversary');
    table.integer('date_added');
    table.integer('email_interval');
    table.integer('phone_interval');
    table.integer('text_interval');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
