import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  // Liste de tous les composants
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  // Permet de déclarer tous les modules nécessaires d'ailleurs
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    PokemonModule,
    AppRoutingModule
  ],
  // Pour l'injection de dépendances d'Angular
  providers: [],
  bootstrap: [AppComponent]  // Désigne le composant racine, à démarrer au lancement de l'app
})


export class AppModule { }
