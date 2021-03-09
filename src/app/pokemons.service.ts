import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemon(id): any {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id);
  }
}
