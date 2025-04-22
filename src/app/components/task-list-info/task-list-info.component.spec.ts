import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListInfoComponent } from './task-list-info.component';

describe('TaskListInfoComponent', () => {
  let component: TaskListInfoComponent;
  let fixture: ComponentFixture<TaskListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
