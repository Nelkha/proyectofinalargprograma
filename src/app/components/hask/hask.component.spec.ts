import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaskComponent } from './hask.component';

describe('HaskComponent', () => {
  let component: HaskComponent;
  let fixture: ComponentFixture<HaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
