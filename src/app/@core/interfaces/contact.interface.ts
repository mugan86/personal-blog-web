import { AbstractControl } from "@angular/forms";

export interface IContactResponse {
    status: boolean;
    message?: string;
    item: IContact;
}

export interface IContact {
    email: string;
    message: string;
    name: string;
    subject: string;
    phone: string;
}


