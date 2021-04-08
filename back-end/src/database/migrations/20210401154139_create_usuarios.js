exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('password').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
  };
  