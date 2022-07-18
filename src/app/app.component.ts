import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  types : string[] = [ "fire", "water", "grass", "dark", "psychic", "ghost", "flying", "poison", "electric", "ice", "ground",
                        "fairy", "dragon", "steel", "normal", "fighting", "bug", "rock"];
}
