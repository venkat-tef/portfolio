import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  showError: boolean = false; // To show error message
  showSuccess: boolean = false; // To show success message
  var_timestamp = new Date();
  var_greetings: string = "";

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form with form controls and validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    if (this.var_timestamp.getHours() >= 0 && this.var_timestamp.getHours() <= 11) {
      this.var_greetings = "Good Morning"
    }
    else {
      this.var_greetings = "Good Afternoon"
    }
    throw new Error('Method not implemented.');
  }
 
  onSubmit(): void {
    // Check if the form is valid
    if (this.contactForm.valid) {
      // Hide error message and show success message
      this.showError = false;
      this.showSuccess = true;
      console.log('Form Submitted!', this.contactForm.value);

      // Make the HTTP POST request to send the form data to the server
      this.http.post('http://localhost:3000/send-email', this.contactForm.value)
        .subscribe(
          response => {
            console.log('Email sent successfully!', response);
            this.contactForm.reset(); // Reset the form after successful submission
            this.showSuccess = true; // Show success message
          },
          error => {
            console.error('Error sending email', error);
            this.showError = true; // Show error message in case of a request failure
            this.showSuccess = false; // Hide success message if there's an error
          }
        );

    } else {
      // Show error message if the form is invalid
      this.showError = true;
      this.showSuccess = false;
      console.log('Form is invalid');
    }
  }
}
