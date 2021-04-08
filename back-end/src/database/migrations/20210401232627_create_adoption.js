exports.up = function(knex) {
    return knex.schema.createTable('adoption', function(table) {
        // chave primaria
        table.increments()

        //campos
        table.string('date').notNullable()

        // chaves estrangeiras
        table.string('user_id').notNullable()
        table.foreign('user_id').references('id').inTable('usuarios')

        table.string('pet_id').notNullable()
        table.foreign('pet_id').references('id').inTable('incidents')

        table.string('ong_id').notNullable()
        table.foreign('ong_id').references('id').inTable('ongs')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('adoption')
  };