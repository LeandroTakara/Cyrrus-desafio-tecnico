import { Component, output } from '@angular/core';
import { Priority, Task } from '../../types/task';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  taskCreated = output<Task>()
  taskCancelled = output<void>()

  taskCreationForm = new FormGroup({
    title: new FormControl('', this.validateStringInput),
    description: new FormControl('', this.validateStringInput),
    dueDate: new FormControl<string>(''),
    priority: new FormControl<Priority>('not defined'),
    completed: new FormControl<boolean>(false),
  });

  ngOnInit() {
    // to prevent showing the error message when the form is not submitted yet
    // simulates the behavior of changed inputs in the form
    this.taskCreationForm.controls.title.markAsDirty();
    this.taskCreationForm.controls.description.markAsDirty();
  }

  validateStringInput(control: AbstractControl) {
    const value = control.value as string;
    return value.trim() === '' ? { required: true } : null;
  }

  createTask() {
    if (this.taskCreationForm.invalid) {
      this.taskCreationForm.markAsPristine();
      return;
    }

    this.taskCreated.emit({
      title: this.taskCreationForm.value.title,
      description: this.taskCreationForm.value.description,
      dueDate: this.taskCreationForm.value.dueDate ?? null,
      priority: this.taskCreationForm.value.priority,
      completed: this.taskCreationForm.value.completed,
      createDate: new Date(),
      subtasks: [],
    } as Task);
  }

  cancelTaskCreation() {
    this.taskCancelled.emit();
  }
}
