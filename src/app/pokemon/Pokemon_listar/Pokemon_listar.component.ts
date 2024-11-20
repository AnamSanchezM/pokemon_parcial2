import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';


@Component({
  selector: 'app-Pokemon_listar',
  templateUrl: './Pokemon_listar.component.html',
  styleUrls: ['./Pokemon_listar.component.css']
})
export class Pokemon_listarComponent implements OnInit {
  pokemons: Array<PokemonDetailDto> = [];
  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  

  ngOnInit(): void {
    this.getPokemons();
  }
}












