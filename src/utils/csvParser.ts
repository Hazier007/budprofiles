import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import type { PartialStrain } from '../types/strain';

function parseEffects(record: any) {
  const effects = {
    positive: {},
    negative: {},
    medical: {}
  };

  // Parse positive effects
  ['relaxed', 'happy', 'euphoric', 'uplifted', 'sleepy', 'talkative', 'creative', 'energetic', 'focused', 'giggly'].forEach(effect => {
    const value = parseFloat(record[effect]);
    if (!isNaN(value)) {
      effects.positive[effect] = value;
    }
  });

  // Parse negative effects
  ['dry_mouth', 'dry_eyes', 'dizzy', 'paranoid', 'anxious'].forEach(effect => {
    const value = parseFloat(record[effect]);
    if (!isNaN(value)) {
      effects.negative[effect] = value;
    }
  });

  // Parse medical effects
  ['stress', 'pain', 'depression', 'anxiety', 'insomnia', 'ptsd', 'headache', 'fatigue', 'lack_of_appetite', 'nausea'].forEach(effect => {
    const value = parseFloat(record[effect]);
    if (!isNaN(value)) {
      effects.medical[effect] = value;
    }
  });

  return effects;
}

export function parseStrainsCsv(filePath: string): PartialStrain[] {
  try {
    const fileContent = readFileSync(filePath, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
      trim: true
    });

    return records.map(record => {
      const strain: PartialStrain = {
        name: record.name?.trim(),
        img_url: record.img_url?.trim(),
        type: record.type?.trim(),
        thc_level: record.thc_level?.trim(),
        most_common_terpene: record.most_common_terpene?.trim(),
        description: record.description?.trim(),
        effects: parseEffects(record)
      };

      return strain;
    });
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
}