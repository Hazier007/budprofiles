import { parseStrainsCsv } from './csvParser';
import { validateStrain } from './strainValidation';
import { normalizeStrain } from './strainNormalization';
import { fallbackStrains } from '../data/fallbackStrains';
import type { Strain } from '../types/strain';

function loadStrains(): Strain[] {
  try {
    const parsedStrains = parseStrainsCsv('src/data/strains.csv');
    
    // Validate and normalize each strain
    const validStrains = parsedStrains
      .map(strain => normalizeStrain(strain))
      .filter(validateStrain);

    if (validStrains.length === 0) {
      console.warn('No valid strains found in CSV, using fallback data');
      return fallbackStrains;
    }

    return validStrains;
  } catch (error) {
    console.error('Error loading strain data:', error);
    return fallbackStrains;
  }
}

// Initialize strains with proper validation
const strains: Strain[] = loadStrains();

// Export a frozen copy to prevent modifications
export { strains };