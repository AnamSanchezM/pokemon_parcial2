import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon_listarComponent } from './Pokemon_listar/Pokemon_listar.component';
import { RouterModule } from '@angular/router';
import { Pokemon_detalleComponent } from './Pokemon_detalle/Pokemon_detalle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [Pokemon_listarComponent,Pokemon_detalleComponent],
  exports: [Pokemon_listarComponent,Pokemon_detalleComponent]
})
export class PokemonModule { }
