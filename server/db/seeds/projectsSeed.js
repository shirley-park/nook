/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      space: 'kitchen',
      description:
        'Going for a modern and functional kitchen with lots of bench space and good task lighting',
      image:
        'https://i.pinimg.com/564x/72/4a/f4/724af40b53c3db1fbc1d591f27ad60e5.jpg',
    },
    {
      id: 2,
      space: 'bathroom',
      description:
        'Neutral colour scheme (greys, off-white), calm and serene space',
      image:
        'https://i.pinimg.com/564x/22/9d/ea/229dea1671f415eab0998ec1b6cc9cba.jpg',
    },
    {
      id: 3,
      space: 'living room',
      description:
        'An intimate and pared-back space to relax and entertain guests',
      image:
        'https://i.pinimg.com/564x/ef/18/af/ef18af3a62e34691527068e83cf6d0be.jpg',
    },
  ])
}
