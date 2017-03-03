import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyInputComponent } from './pretty-input.component';

describe('PrettyInputComponent', () => {
  let component: PrettyInputComponent;
  let fixture: ComponentFixture<PrettyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
