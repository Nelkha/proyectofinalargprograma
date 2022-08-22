import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupBarComponent } from './sup-bar.component';

describe('SupBarComponent', () => {
  let component: SupBarComponent;
  let fixture: ComponentFixture<SupBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
