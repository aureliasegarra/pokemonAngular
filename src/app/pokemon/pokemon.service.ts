import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

// @Injectable permet d'utiliser l'injection de dépendance d'Angular
@Injectable({
  // La propriété providedIn nous garantit d'avoir le même PokemonService dans toute l'application
  // tous nos composants utiliseront la même instance de PokemonService
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  } 

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu',
      'Eau',
      'Inscete',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
