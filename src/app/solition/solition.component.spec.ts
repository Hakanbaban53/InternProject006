import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitionComponent } from './solition.component';

describe('SolitionComponent', () => {
  let component: SolitionComponent;
  let fixture: ComponentFixture<SolitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
