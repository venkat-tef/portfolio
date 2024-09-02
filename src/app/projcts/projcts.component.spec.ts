import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjctsComponent } from './projcts.component';

describe('ProjctsComponent', () => {
  let component: ProjctsComponent;
  let fixture: ComponentFixture<ProjctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjctsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
