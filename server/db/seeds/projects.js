/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      space: 'kitchen',
      description:
        'Going for a modern, but functional kitchen with lots of bench space and good task lighting',
      image_gallery: '',
    },
    {
      id: 2,
      space: 'bathroom',
      description:
        'neutral colour scheme (greys, off-white), calm space with muted lighting',
      image_gallery: '',
    },
    { id: 3, space: 'living room', description: '', image_gallery: '' },
  ])
}
