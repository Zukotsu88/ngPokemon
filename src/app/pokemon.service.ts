import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
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


  getPokemonOfType(type : string): Observable<Pokemon[]> {
    console.log('THIS IS THE TYPE:');
    console.log(type);

    const pokemons$ = this.http.get<Pokemon[]>(this.pokemonUrl);

    pokemons$.pipe(
        map(pokemons => pokemons
          .filter(pokemon => pokemon.primaryType.includes(type) || pokemon.secondaryType.includes(type))),
        catchError(this.handleError<Pokemon[]>('getPokemonOfType', [])),
      );

      console.log(pokemons$);
      return pokemons$;
  }

  // TODO: POST for adding a pokemon

  // TODO: PUT for updating a pokemon

  // TODO: DELETE for deleting a pokemon

}
