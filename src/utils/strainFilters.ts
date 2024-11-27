import type { Strain } from '../types/strain';

type SortOption = 'name-asc' | 'name-desc' | 'thc-high' | 'thc-low';

function sortStrains(strains: Strain[], sortOption: SortOption): Strain[] {
  const sortedStrains = [...strains];

  switch (sortOption) {
    case 'name-asc':
      return sortedStrains.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedStrains.sort((a, b) => b.name.localeCompare(a.name));
    case 'thc-high':
      return sortedStrains.sort((a, b) => {
        const aThc = parseFloat(a.thc_level) || 0;
        const bThc = parseFloat(b.thc_level) || 0;
        return bThc - aThc;
      });
    case 'thc-low':
      return sortedStrains.sort((a, b) => {
        const aThc = parseFloat(a.thc_level) || 0;
        const bThc = parseFloat(b.thc_level) || 0;
        return aThc - bThc;
      });
    default:
      return sortedStrains;
  }
}

export function filterStrains(
  strains: Strain[],
  type?: string | null,
  terpene?: string | null,
  sort?: string | null
): Strain[] {
  let filteredStrains = [...strains];

  // Apply type filter if valid
  if (type && typeof type === 'string') {
    filteredStrains = filteredStrains.filter(strain => strain.type === type);
  }

  // Apply terpene filter if valid
  if (terpene && typeof terpene === 'string') {
    filteredStrains = filteredStrains.filter(strain => strain.most_common_terpene === terpene);
  }

  // Apply sorting if valid
  if (sort && typeof sort === 'string' && isValidSortOption(sort)) {
    filteredStrains = sortStrains(filteredStrains, sort);
  }

  return filteredStrains;
}

function isValidSortOption(sort: string): sort is SortOption {
  return ['name-asc', 'name-desc', 'thc-high', 'thc-low'].includes(sort);
}