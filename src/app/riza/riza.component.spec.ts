import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RizaComponent } from './riza.component';

describe('RizaComponent', () => {
  let component: RizaComponent;
  let fixture: ComponentFixture<RizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
