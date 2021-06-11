import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  accessVar = new Subject<boolean>();
  accessVar$ = this.accessVar.asObservable();
  update(newValue: boolean) {
    this.accessVar.next(newValue);
  }
}
