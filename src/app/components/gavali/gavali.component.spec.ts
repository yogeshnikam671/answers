import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GavaliComponent } from './gavali.component';

describe('GavaliComponent', () => {
  let component: GavaliComponent;
  let fixture: ComponentFixture<GavaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GavaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GavaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
