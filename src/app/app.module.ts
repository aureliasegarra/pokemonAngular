import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  // Liste de tous les composants
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent
  ],
  // Permet de déclarer tous les modules nécessaires d'ailleurs
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Pour l'injection de dépendances d'Angular
  providers: [],
  bootstrap: [AppComponent]  // Désigne le composant racine, à démarrer au lancement de l'app
})


export class AppModule { }
