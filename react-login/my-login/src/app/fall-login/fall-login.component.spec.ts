import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallLoginComponent } from './fall-login.component';

describe('FallLoginComponent', () => {
  let component: FallLoginComponent;
  let fixture: ComponentFixture<FallLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FallLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
