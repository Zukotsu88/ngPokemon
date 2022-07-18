import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = "https://localhost:7259/api/v1/pokemon";

  constructor(private http: HttpClient) { }

  // return the list of all pokemon as an Observable
  getPokemons() : Observable<Pokemon[]> {
     const pokemons = this.http.get<Pokemon[]>(this.pokemonUrl)
      .pipe(
        catchError(this.handleError<Pokemon[]>('getPokemons', []))
      );
      console.log(pokemons);
      return pokemons;
  }

  // handles the failed http operation
  private handleError<T>(operation = 'operation', result?: T) {
    return (error : any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  // get pokemon by id
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      catchError(this.handleError<Pokemon>(`GetPokemon id=${id}`))
    );
  }

  // TODO: POST for adding a pokemon

  // TODO: PUT for updating a pokemon

  // TODO: DELETE fro deleting a pokemon

}
