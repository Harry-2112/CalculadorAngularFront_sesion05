import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButoonComponent } from './butoon.component';

describe('ButoonComponent', () => {
  let component: ButoonComponent;
  let fixture: ComponentFixture<ButoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
