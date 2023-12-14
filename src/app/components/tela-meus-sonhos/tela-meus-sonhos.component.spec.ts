import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaMeusSonhosComponent } from './tela-meus-sonhos.component';

describe('TelaMeusSonhosComponent', () => {
  let component: TelaMeusSonhosComponent;
  let fixture: ComponentFixture<TelaMeusSonhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaMeusSonhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaMeusSonhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
