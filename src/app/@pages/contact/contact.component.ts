import { ContactService } from './contact.service';
import { SEND_CONTACT } from './../../@graphql/operations/mutation/contact';
import { ApiService } from './../../@graphql/services/api.service';
import { CustomValidationService } from './../../@core/services/forms/custom-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GENERAL } from '@core/constants/general-configs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  coupon: { code: string; active: boolean; data_finish: string } =
    GENERAL.coupon;
  options: Array<{
    code: string;
    description: string;
  }> = [
    {
      code: 'COURSESINFO',
      description: 'Información de cursos (explicar de que curso es)',
    },
    { code: 'TRABAJO', description: 'Trabajo' },
    { code: 'SUGGESTS', description: 'Sugerencias' },
    {
      code: 'OTHERS',
      description: 'Otros (Especificar con + detalle en el mensaje)',
    },
  ];
  contactForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.minLength(6)]],
    subject: ['OTHERS', [Validators.required]],
    message: ['', Validators.required],
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService  ) {}

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get form() {
    return this.contactForm?.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm?.invalid) {
      return;
    }

    this.contactService.sendMessage().subscribe((result) => console.log(result));
   
    // display form values on success
    /*alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm?.value, null, 4)
    );*/
  }

  onReset() {
    this.submitted = false;
    this.contactForm?.reset();
  }
}
