
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('description').notNull()
      table.string('imageUrl')
      table.binary('content').notNull()
      table.integer('userId').unsigned().notNull()
      table.integer('categoryId').unsigned().notNull()
      table.foreign('userId').references('id').inTable('users')
      table.foreign('categoryId').references('id').inTable('categories')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
