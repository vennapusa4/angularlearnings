import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealComponentComponent } from './meal-component.component';

describe('MealComponentComponent', () => {
  let component: MealComponentComponent;
  let fixture: ComponentFixture<MealComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
