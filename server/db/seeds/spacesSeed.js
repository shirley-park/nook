/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('spaces').del()
  await knex('spaces').insert([
    { id: 1, space_name: 'kitchen', projects_id: 1 },
    { id: 2, space_name: 'bathroom', projects_id: 2 },
    { id: 3, space_name: 'living room', projects_id: 3 },
  ])
}
