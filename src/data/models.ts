export interface Location {
  zone: Zones;
  x: number;
  y: number;
  z: number;
}

export interface Creature {
  name: string;
  kingdom: Kingdom;
  class: Bloodborn | Bloodless | Transcendent;
  location: Location[];
  image: string;
  notes: string;
}

export enum Kingdom {
  Bloodborn = "Bloodborn",
  Bloodless = "Bloodless",
  Transcendent = "Transcendent",
}

export enum Bloodborn {
  Scalekin = "Scalekin",
  Beastkin = "Beastkin",
  Cloudkin = "Cloudkin",
  Seedkin = "Seedkin",
  Wavekin = "Wavekin",
  Vilekin = "Vilekin",
  Dragons = "Dragons",
}

export enum Bloodless {
  Forgekin = "Forgekin",
  Ashkin = "Ashkin",
  Soulkin = "Soulkin",
}

export enum Transcendent {
  Voidsent = "Voidsent",
  Elementals = "Elementals",
  Primals = "Primals",
  Auspices = "Auspices",
}

export enum Zones {
  CentralThanalan = "Central Thanalan",
  WesternThanalan = "Western Thanalan",
}
