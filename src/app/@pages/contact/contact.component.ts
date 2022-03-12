import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GENERAL } from '@core/constants/general-configs';
import { IContact, IContactResponse } from '@core/interfaces/contact.interface';
import { loadData, closeAlert } from '@shared/alerts/alerts';
import { LanguageSelectService } from '@core/services/language-select.service';
import { TranslateService } from '@ngx-translate/core';

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
  alertType = '';
  alertMsg = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private languageSelectService: LanguageSelectService,
    private translate: TranslateService
  ) {
    this.languageSelectService.language.subscribe((languageSelect) => {
      this.translate.use(languageSelect);
    });
  }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get form() {
    return this.contactForm?.controls;
  }

  onSubmit() {
    this.submitted = true;
    // No sigue si es inválido
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const message: IContact = {
      name: this.contactForm.get('name')?.value,
      message: this.contactForm.get('message')?.value,
      subject: this.contactForm.get('subject')?.value,
      email: this.contactForm.get('email')?.value,
      phone: this.contactForm.get('phone')?.value,
    };
    loadData(
      'Enviando datos...',
      `
      ${message.subject} - ${message.message}
    `
    );
    this.contactService
      .sendMessage(message)
      .subscribe((result: IContactResponse) => {
        if (result.status) {
          console.log(result.message, result.item.email);
          this.alertType = 'success';
          this.alertMsg =
            `${result.message?.substring(0, result.message.length - 1)} ${
              result.item.email
            }.` || '';
          this.onReset();
          closeAlert();
          return;
        }
        this.alertType = 'danger';
        this.alertMsg = result.message || '';
      });

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
