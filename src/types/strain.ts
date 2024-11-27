export interface StrainEffects {
  positive: { [key: string]: number };
  negative: { [key: string]: number };
  medical: { [key: string]: number };
}

export interface Strain {
  name: string;
  img_url: string;
  type: string;
  thc_level: string;
  most_common_terpene: string;
  description: string;
  effects: StrainEffects;
}

export type PartialStrain = Partial<Strain>;