
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table)=>{
    table.increments();
    table.string('name').notNullable();
    table.string('phone_number');
    table.string('email');
    table.string('birthday').notNullable();
    table.string('anniversary');
    table.integer('date_added');
    table.integer('email_interval').notNullable();
    table.integer('phone_interval').notNullable();
    table.integer('text_interval').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
