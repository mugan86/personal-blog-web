import { ApiService } from './../../@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SEND_CONTACT } from '@graphql/operations/mutation/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }
  
  sendMessage() {
    return this.set(SEND_CONTACT, {message: {
      name: "Gamezonia Online Shop",
      email: "gamezonia.online.shop@gmail.com",
      message: "Más información acerca de los cursos por favor",
      subject: "OTHERS"
    }});
  }
}
