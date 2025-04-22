import { Component, output } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { SubTask } from '../../types/task';

@Component({
  selector: 'app-create-subtask',
  imports: [ReactiveFormsModule],
  templateUrl: './create-subtask.component.html',
  styleUrl: './create-subtask.component.css'
})
export class CreateSubtaskComponent {
  subtaskCreated = output<SubTask>();
  subtaskCancelled = output<void>();

  subtaskCreationForm = new FormGroup({
    title: new FormControl('', this.validateStringInput),
    completed: new FormControl<boolean>(false),
  });
  
  ngOnInit() {
    // to prevent showing the error message when the form is not submitted yet
    // simulates the behavior of changed inputs in the form
    this.subtaskCreationForm.controls.title.markAsDirty();
  }

  validateStringInput(control: AbstractControl) {
    const value = control.value as string;
    return value.trim() === '' ? { required: true } : null;
  }

  createSubtask() {
    if (this.subtaskCreationForm.invalid) {
      this.subtaskCreationForm.markAsPristine();
      return;
    }

    this.subtaskCreated.emit({
      title: this.subtaskCreationForm.value.title,
      completed: this.subtaskCreationForm.value.completed,
      createDate: new Date(),
    } as SubTask);
  }

  cancelSubtaskCreation() {
    this.subtaskCancelled.emit();
  }
}
