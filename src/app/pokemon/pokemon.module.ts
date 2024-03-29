import { RouterModule, Routes } from '@angular/router';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

const pokemonRoutes: Routes = [
  { path: 'pokemon/add', component: AddPokemonComponent },
  { path: 'edit/pokemon/:id', component: EditPokemonComponent },
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent }
]

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
