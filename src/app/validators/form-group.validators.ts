import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

export interface ErrorObj { [key: string]: boolean }

export class FormGroupValidators {
  static checkForm({value}: FormGroup): ErrorObj | null {
    return (value.name.split(' ').length > 3) ? { wrongFormat: true } : null;
  }
}
