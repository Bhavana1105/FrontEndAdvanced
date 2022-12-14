import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionComponent } from './user-interaction.component';

describe('UserInteractionComponent', () => {
  let component: UserInteractionComponent;
  let fixture: ComponentFixture<UserInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
