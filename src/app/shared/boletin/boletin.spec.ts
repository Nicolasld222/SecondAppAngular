import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boletin } from './boletin';

describe('Boletin', () => {
  let component: Boletin;
  let fixture: ComponentFixture<Boletin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boletin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boletin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
