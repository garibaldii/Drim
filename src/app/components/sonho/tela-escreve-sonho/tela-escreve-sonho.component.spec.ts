import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEscreveSonhoComponent } from './tela-escreve-sonho.component';

describe('TelaEscreveSonhoComponent', () => {
  let component: TelaEscreveSonhoComponent;
  let fixture: ComponentFixture<TelaEscreveSonhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaEscreveSonhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaEscreveSonhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
