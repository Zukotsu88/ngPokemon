import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypeComponent } from './poke-type.component';

describe('PokeTypeComponent', () => {
  let component: PokeTypeComponent;
  let fixture: ComponentFixture<PokeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
