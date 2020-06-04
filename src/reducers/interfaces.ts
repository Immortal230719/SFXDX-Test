export interface IPokemonBase {
  name: string;
  url: string;
}

export interface ISinglePokemon {
  name: string;
  stats: Array<string>;
  abilities: Array<string>;
  images: Array<string | unknown>;
  types: Array<string>;
  moves: Array<MoveID> | null;
}

export interface MoveID {
  id: string;
  name: string;
}

export interface ISingleMove {
  moveId: number;
  name: string;
  power: number;
  generation: string;
  accuracy: number;
  damageClass: string;
  type: string;
  target: string;
  effects: string;
}

export interface IPagination {
  count: number;
  currentPage?: number;
  backDrop?: boolean;
}
