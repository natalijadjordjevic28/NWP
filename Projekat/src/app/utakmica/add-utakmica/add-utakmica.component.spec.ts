import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtakmicaComponent } from './add-utakmica.component';

describe('AddUtakmicaComponent', () => {
  let component: AddUtakmicaComponent;
  let fixture: ComponentFixture<AddUtakmicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtakmicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtakmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
