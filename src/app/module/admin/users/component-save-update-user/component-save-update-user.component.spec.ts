import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSaveUpdateUserComponent } from './component-save-update-user.component';

describe('ComponentSaveUpdateUserComponent', () => {
  let component: ComponentSaveUpdateUserComponent;
  let fixture: ComponentFixture<ComponentSaveUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSaveUpdateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSaveUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
