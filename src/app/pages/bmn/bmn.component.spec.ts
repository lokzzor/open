import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmnComponent } from './bmn.component';

describe('BmnComponent', () => {
  let component: BmnComponent;
  let fixture: ComponentFixture<BmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
