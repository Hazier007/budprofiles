import { parseStrainsCsv } from '../utils/csvParser';
import type { Strain } from '../types/strain';

// Load and parse the CSV data
let strains: Strain[] = [];

try {
  strains = parseStrainsCsv('src/data/strains.csv');
} catch (error) {
  console.error('Error loading strain data:', error);
  // Fallback data in case CSV loading fails
  strains = [
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
    // Add more fallback strains here
  ];
}

export { strains };
export type { Strain };