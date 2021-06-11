import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  newsLetterForm: FormGroup = this.formBuilder.group(
    {
      email: ["", [Validators.required, Validators.email]]
    }
  );
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }
// convenience getter for easy access to form fields
get form() {
  return this.newsLetterForm?.controls;
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.newsLetterForm?.invalid) {
    return;
  }

  // display form values on success
  alert(
    "SUCCESS!! :-)\n\n" + JSON.stringify(this.newsLetterForm?.value, null, 4)
  );
}

onReset() {
  this.submitted = false;
  this.newsLetterForm?.reset();
}

}
