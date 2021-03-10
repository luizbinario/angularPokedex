import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import { PokemonTypes } from '../assets/pokemon_types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  pokemon: any;
  id: number = 1;
  idPokemon: number = this.id;
  types: any = PokemonTypes;

  constructor(private pokemons: PokemonsService) {
    this.pokemons.getPokemon(this.id)
      .subscribe(res => {
        this.pokemon = res
      }
    );
  }

  next() {
    this.id += 1;
    this.idPokemon = this.id;
    this.pokemons.getPokemon(this.id)
      .subscribe(res => {
        this.pokemon = res
      }
    );
  }

  previous() {
    if(this.id == 1) {
      this.id = 1;
      this.idPokemon = this.id;
    }
    else {
      this.id -= 1;
      this.idPokemon = this.id;
    }
    this.pokemons.getPokemon(this.id)
      .subscribe(res => {
        this.pokemon = res
      }
    );
  }

  keyPokemonUp(event: any) {
    this.id = Number(event.target.value);
    if(this.id < 1) {
      this.id = 1;
    }
    this.pokemons.getPokemon(this.id)
      .subscribe(res => {
        this.pokemon = res
      }
    );
  }
}
