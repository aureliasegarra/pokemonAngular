import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // Liste de tous les composants
  declarations: [
    AppComponent
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
