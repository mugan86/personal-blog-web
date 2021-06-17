import { IContact } from './../../@core/interfaces/contact.interface';
import { ApiService } from './../../@graphql/services/api.service';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SEND_CONTACT } from '@graphql/operations/mutation/contact';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService{

  constructor(apollo: Apollo) {
    super(apollo);
  }
  
  sendMessage(message: IContact) {
    return this.set(SEND_CONTACT, {message}).pipe(map((result: any) => {
      return result.sendContactMessage;
    }));
  }
}
