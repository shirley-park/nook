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
        'https://i.pinimg.com/564x/76/15/a6/7615a6db7ec0323e71619d6a2a7673ab.jpg, https://i.pinimg.com/564x/79/24/31/79243126ed80938a6cf08b4d3cb3fef1.jpg, https://i.pinimg.com/564x/33/f6/7b/33f67b3120d29185cca07d8dbaf9abf7.jpg',
    },
    {
      id: 2,
      space: 'bathroom',
      description:
        'Neutral colour scheme (greys, off-white), calm and serene space',
      image:
        'https://i.pinimg.com/564x/e3/ea/94/e3ea9478f9b32a572b8ee5a632f619dd.jpg, https://i.pinimg.com/564x/22/9d/ea/229dea1671f415eab0998ec1b6cc9cba.jpg, https://i.pinimg.com/564x/4c/e1/2f/4ce12f33845809c6293f03ec4f1e386a.jpg',
    },
    {
      id: 3,
      space: 'living room',
      description:
        'An intimate and pared-back space to relax and entertain guests',
      image:
        'https://i.pinimg.com/564x/6d/61/ca/6d61ca60332d4a8adf4736bc7f076ffc.jpg, https://i.pinimg.com/564x/ef/18/af/ef18af3a62e34691527068e83cf6d0be.jpg,  https://i.pinimg.com/564x/62/07/88/620788840a239c5481a093195a4b3998.jpg',
    },
  ])
}
