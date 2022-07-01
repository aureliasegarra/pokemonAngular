import { Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  ngOnInit() {
    // 1. Récupérer la liste de tous les pokemons 
    this.types = this.pokemonService.getPokemonTypeList();

  }

  // 2. vérifier si le pokemon a le type qu'il faut
  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  // 3. Sélectionner le type
  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {
    // si l'utilisateur a coché 1 case il ne doit pas pouvoir la désélectionner
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    } 
    // si l'utilisateur a coché 3 cases il ne doit pas pouvoir en sélectionner plus
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  // 4. Méthode pour la soumission du formaulaire
  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
