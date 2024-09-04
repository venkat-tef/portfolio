import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  showError: boolean = false; // To show error message
  showSuccess: boolean = false; // To show success message
  var_timestamp = new Date();
  var_greetings: string = "";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.var_timestamp.getHours() >= 0 && this.var_timestamp.getHours() <= 11) {
      this.var_greetings = "Good Morning";
    } else {
      this.var_greetings = "Good Afternoon";
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs.send('service_venki', 'template_ftccg7v', templateParams, 'jwwjWXhG84a2Xx-ML')
        .then(response => {
          console.log('Email sent successfully!', response);
          this.contactForm.reset();
          this.showSuccess = true;
          // this.showError = false;
          setTimeout(() => this.showSuccess = false, 2000); // Hide after 2 seconds
        })
        .catch(error => {
          console.error('Error sending email', error);
          this.showError = true;
          this.showSuccess = false;
        });
    } else {
      this.showError = true;
      this.showSuccess = false;
    }
  }
}
