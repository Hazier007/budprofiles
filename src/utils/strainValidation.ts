import type { Strain, PartialStrain } from '../types/strain';

function hasRequiredProperties(strain: PartialStrain): boolean {
  return Boolean(
    strain &&
    strain.name &&
    strain.type &&
    strain.thc_level &&
    strain.most_common_terpene &&
    strain.description &&
    strain.effects
  );
}

function hasValidEffects(strain: PartialStrain): boolean {
  return Boolean(
    strain.effects &&
    typeof strain.effects.positive === 'object' &&
    typeof strain.effects.negative === 'object' &&
    typeof strain.effects.medical === 'object' &&
    Object.keys(strain.effects.positive).length > 0
  );
}

function hasValidStrings(strain: PartialStrain): boolean {
  return Boolean(
    typeof strain.name === 'string' &&
    typeof strain.type === 'string' &&
    typeof strain.thc_level === 'string' &&
    typeof strain.most_common_terpene === 'string' &&
    typeof strain.description === 'string'
  );
}

export function validateStrain(strain: PartialStrain): strain is Strain {
  return hasRequiredProperties(strain) && 
         hasValidEffects(strain) && 
         hasValidStrings(strain);
}