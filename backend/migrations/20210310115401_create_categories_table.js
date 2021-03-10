
exports.up = function(knex, Promise) {
  knex.schema.createTable('categories', table => {
      table.increments('id').unique()
      table.string('name').notNull()
      table.integer('parentId').references('parentId').intTable('categories')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories')
};
