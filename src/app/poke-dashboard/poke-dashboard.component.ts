import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-poke-dashboard',
  templateUrl: './poke-dashboard.component.html',
  styleUrls: ['./poke-dashboard.component.css']
})
export class PokeDashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private router : Router) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }
}
