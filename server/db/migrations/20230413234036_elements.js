/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('elements', (table) => {
    table.increments('id')
    table.integer('space_id')
    table.integer('project_id')
    table.string('item_name')
    table.string('make')
    table.string('description')
    table.string('imageUrl')
    table.string('element_tag')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('elements')
}
