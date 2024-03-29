import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService){}
  
ngOnInit() {
  // Récupération d'un Observable dans ma list et je m'abonne
  this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList);
}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
  
}
