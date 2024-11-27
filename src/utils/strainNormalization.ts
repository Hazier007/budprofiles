import type { Strain, PartialStrain } from '../types/strain';

export function normalizeStrain(strain: PartialStrain): Strain {
  return {
    name: strain.name || 'Unknown Strain',
    img_url: strain.img_url || '/placeholder.jpg',
    type: strain.type || 'Hybrid',
    thc_level: strain.thc_level || '0%',
    most_common_terpene: strain.most_common_terpene || 'Unknown',
    description: strain.description || 'No description available.',
    effects: {
      positive: strain.effects?.positive || {},
      negative: strain.effects?.negative || {},
      medical: strain.effects?.medical || {}
    }
  };
}