import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.css'],
})
export class PokeTypeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokeType: string = '';

  constructor(
    private route: ActivatedRoute, // carries route info for this component
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    // var curPokemons : Pokemon[] = [];
    // this.pokemonService
    //   .getPokemons()
    //   .subscribe((pokemons) => (curPokemons = pokemons));
    // this.pokemons = curPokemons.filter(
    //   (p) => p.primaryType.includes(type!) || p.secondaryType.includes(type!)
    // );

    this.pokemonService.getPokemonOfType(type!).subscribe(p => this.pokemons = p);
    console.log(this.pokemons);
    this.pokeType = type!;
  }
}
