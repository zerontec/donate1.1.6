import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatesComponent } from './donates.component';

describe('DonatesComponent', () => {
  let component: DonatesComponent;
  let fixture: ComponentFixture<DonatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
