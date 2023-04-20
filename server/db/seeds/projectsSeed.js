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
        'https://i.pinimg.com/564x/79/24/31/79243126ed80938a6cf08b4d3cb3fef1.jpg| https://i.pinimg.com/474x/42/0a/bb/420abb5d179aa78d02076e7b8888762f.jpg| https://i.pinimg.com/564x/1b/92/e7/1b92e7c2683e3cfbe09ab945a6a9306e.jpg',
    },
    {
      id: 2,
      space: 'bathroom',
      description:
        'Neutral colour scheme (greys, off-white), calm and serene space',
      image:
        'https://i.pinimg.com/564x/22/9d/ea/229dea1671f415eab0998ec1b6cc9cba.jpg| https://i.pinimg.com/564x/e3/ea/94/e3ea9478f9b32a572b8ee5a632f619dd.jpg| https://i.pinimg.com/474x/3e/1c/ff/3e1cff6395f79d1c73aba8296dac2ec3.jpg',
    },
    {
      id: 3,
      space: 'living room',
      description:
        'An intimate and pared-back space to relax and entertain guests',
      image:
        'https://i.pinimg.com/564x/ef/18/af/ef18af3a62e34691527068e83cf6d0be.jpg| https://i.pinimg.com/564x/6d/61/ca/6d61ca60332d4a8adf4736bc7f076ffc.jpg| https://i.pinimg.com/474x/06/d2/2a/06d22a7a5937525ee588e50310a491a5.jpg',
    },
  ])
}
