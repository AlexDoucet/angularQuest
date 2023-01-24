import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})






export class ReactiveFormsComponent {
  // Declare all controls with validation rules
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // Get form value as JSON object
    console.log('oderForm submitted : ', this.orderForm.value);
  }
}

