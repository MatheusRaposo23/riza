import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NossasRaizesComponent } from './nossas-raizes.component';

describe('NossasRaizesComponent', () => {
  let component: NossasRaizesComponent;
  let fixture: ComponentFixture<NossasRaizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NossasRaizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NossasRaizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
