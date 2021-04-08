exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        // chave primaria
        table.increments()

        //campos
        table.string('title').notNullable()
        table.string('namePet').notNullable()
        table.string('age').notNullable()
        table.string('breed').notNullable()
        table.string('vaccine').notNullable()
        table.string('description').notNullable()

        // chave estrangeira
        table.string('ong_id').notNullable()
        table.foreign('ong_id').references('id').inTable('ongs')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  };