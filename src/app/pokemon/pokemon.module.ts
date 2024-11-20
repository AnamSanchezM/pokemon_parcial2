import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon_listarComponent } from './Pokemon_listar/Pokemon_listar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [Pokemon_listarComponent],
  exports: [Pokemon_listarComponent]
})
export class PokemonModule { }
