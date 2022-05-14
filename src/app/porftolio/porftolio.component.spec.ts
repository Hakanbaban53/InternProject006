import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorftolioComponent } from './porftolio.component';

describe('PorftolioComponent', () => {
  let component: PorftolioComponent;
  let fixture: ComponentFixture<PorftolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorftolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorftolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
