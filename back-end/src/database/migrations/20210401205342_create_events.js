exports.up = function(knex) {
    return knex.schema.createTable('events', function(table) {
        // chave primaria
        table.increments()

        //campos
        table.string('title').notNullable()
        table.string('date').notNullable()
        table.string('hour').notNullable()
        table.string('localization').notNullable()
        table.string('description').notNullable()

        // chave estrangeira
        table.string('ong_id').notNullable()
        table.foreign('ong_id').references('id').inTable('ongs')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('events')
  };