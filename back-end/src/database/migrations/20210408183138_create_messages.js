exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();

        // chave estrangeira
        table.string('user_id').notNullable()
        table.foreign('user_id').references('id').inTable('usuarios')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('messages')
  };
  