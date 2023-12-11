import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadraoDrimComponent } from './padrao-drim.component';

describe('PadraoDrimComponent', () => {
  let component: PadraoDrimComponent;
  let fixture: ComponentFixture<PadraoDrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadraoDrimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadraoDrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
