import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CprodComponent } from './cprod.component';

describe('CprodComponent', () => {
  let component: CprodComponent;
  let fixture: ComponentFixture<CprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
