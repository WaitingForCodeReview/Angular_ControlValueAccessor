import { AbstractControl } from '@angular/forms';

export interface ErrorObj { [key: string]: boolean }

export class FormGroupValidators {
  static checkForm(control: AbstractControl): ErrorObj | null {
    return control.value.posts.some( post => post.name.split(' ').length > 3 ) ? { wrongFormat: true } : null;
  }
}
