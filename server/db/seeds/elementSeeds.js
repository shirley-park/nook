/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('elements').del()
  await knex('elements').insert([
    {
      id: 1,
      space_id: 1,
      project_id: 1,
      item_name: 'Eos gooseneck tap',
      make: 'Franke',
      description: 'Colour: stainless steel. Mixer for the kitchen',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0552/5808/7468/products/316-7300-51-lifestyle_1300x.jpg?v=1643273241',
      element_tag: 'plumbing',
    },
    {
      id: 2,
      space_id: 1,
      project_id: 1,
      item_name: 'Benchtops and splashback',
      make: 'Caesarstone',
      description: 'Colour: Cloudburst Concrete. Engineered stone benchtop',
      imageUrl:
        'https://www.laminex.co.nz/medias/p-Airy-Concrete-insitu-768Wx739H?context=bWFzdGVyfGltYWdlc3w1Njk0M3xpbWFnZS9qcGVnfGgyOC9oYWQvODkxMjU5NzY4MDE1OC9wX0FpcnlfQ29uY3JldGUtaW5zaXR1Xzc2OFd4NzM5SHw5NDAyMTUzZmY0OTg4MDIzNGQ5MTBjMDEyY2I0MjBlMWIwOTFlMzM1NDhmYWE1YWE2ZjA5NDk2ZTAyMDEwNjVh',
      element_tag: 'cabinetry',
    },
    {
      id: 3,
      space_id: 1,
      project_id: 1,
      item_name: 'Cabinets from Woodgrain Collection',
      make: 'Laminex',
      description: 'Colour: Bisque',
      imageUrl:
        'https://i0.wp.com/diamondinteriors.org/wp-content/uploads/2022/03/Laminex-Kitchen-Cabinets.jpg?ssl=1',
      element_tag: 'cabinetry',
    },
    {
      id: 4,
      space_id: 1,
      project_id: 1,
      item_name: 'Dual bowl sink',
      make: 'Franke',
      description: 'Colour: Stainless steel. Undermount sink for kitchen',
      imageUrl:
        'https://www.kitchenthings.co.nz/media/catalog/product/f/r/franke_anx220_double_sink_0278.png?quality=80&bg-color=255,255,255&fit=bounds&height=597&width=597&canvas=597:597&format=jpeg',
      element_tag: 'plumbing',
    },
    {
      id: 5,
      space_id: 1,
      project_id: 1,
      item_name: 'LED strip lighting',
      make: 'Halcyon Lighting',
      description: 'Under-cabinet profile lighting',
      imageUrl:
        'https://i.pinimg.com/474x/41/24/93/412493c4987acdd81cbe68eea1a702d7.jpg',
      element_tag: 'lighting',
    },
    {
      id: 6,
      space_id: 1,
      project_id: 1,
      item_name: 'Slimline pendant',
      make: 'Marset, ECC',
      description: 'Colour: bronze. For the kitchen island',
      imageUrl:
        'https://i.pinimg.com/564x/56/8d/57/568d57a5ecb0b3d975097c328715da0f.jpg',
      element_tag: 'lighting',
    },
    {
      id: 7,
      space_id: 2,
      project_id: 2,
      item_name: 'test',
      make: 'test',
      description: 'test',
      imageUrl: 'test',
      element_tag: 'test',
    },
  ])
}
