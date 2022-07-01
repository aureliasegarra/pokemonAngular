import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient ){}

  private log(response: Pokemon[]|Pokemon|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
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
