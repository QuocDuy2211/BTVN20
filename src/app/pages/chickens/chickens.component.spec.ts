import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickensComponent } from './chickens.component';

describe('ChickensComponent', () => {
  let component: ChickensComponent;
  let fixture: ComponentFixture<ChickensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
