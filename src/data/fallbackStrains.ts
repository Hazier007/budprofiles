import type { Strain } from '../types/strain';

export const fallbackStrains: Strain[] = [
  {
    name: "GG4",
    img_url: "https://images.leafly.com/flower-images/gg-4.jpg",
    type: "Hybrid",
    thc_level: "20%",
    most_common_terpene: "Caryophyllene",
    description: "Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling \"glued\" to the couch.",
    effects: {
      positive: { relaxed: 66, happy: 54, euphoric: 51, uplifted: 39, sleepy: 27 },
      negative: { dry_mouth: 24, dry_eyes: 12, dizzy: 5, paranoid: 4, anxious: 4 },
      medical: { stress: 29, pain: 24, depression: 23, anxiety: 22, insomnia: 17 }
    }
  },
  {
    name: "Wedding Cake",
    img_url: "https://images.leafly.com/flower-images/wedding-cake.jpg",
    type: "Hybrid",
    thc_level: "22%",
    most_common_terpene: "Limonene",
    description: "Wedding Cake is a potent indica-hybrid marijuana strain made by crossing Cherry Pie with Girl Scout Cookies.",
    effects: {
      positive: { relaxed: 60, happy: 50, euphoric: 41, uplifted: 35 },
      negative: { dry_mouth: 17, dry_eyes: 7, dizzy: 4, paranoid: 2, anxious: 2 },
      medical: { stress: 19, pain: 12, depression: 14, anxiety: 16, insomnia: 8 }
    }
  }
];