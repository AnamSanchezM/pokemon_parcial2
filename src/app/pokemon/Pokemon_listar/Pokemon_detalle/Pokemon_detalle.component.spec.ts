/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pokemon_detalleComponent } from './Pokemon_detalle.component';

describe('Pokemon_detalleComponent', () => {
  let component: Pokemon_detalleComponent;
  let fixture: ComponentFixture<Pokemon_detalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pokemon_detalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemon_detalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
