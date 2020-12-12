import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInncidentComponent } from './create-inncident.component';

describe('CreateInncidentComponent', () => {
  let component: CreateInncidentComponent;
  let fixture: ComponentFixture<CreateInncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
