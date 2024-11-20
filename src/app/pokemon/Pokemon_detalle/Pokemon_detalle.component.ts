import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-Pokemon_detalle',
  templateUrl: './Pokemon_detalle.component.html',
  styleUrls: ['./Pokemon_detalle.component.css']
})
export class Pokemon_detalleComponent implements OnInit {

  pokemons!: String;
  @Input() pokemonDetail!: PokemonDetailDto;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService ) { }

  ngOnInit() {
  }

}





