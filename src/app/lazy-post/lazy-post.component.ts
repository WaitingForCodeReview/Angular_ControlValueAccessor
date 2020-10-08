import { Component, forwardRef } from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';
import { Post } from '../interfaces/response.interface';
import { FormGroupValidators } from '../validators/form-group.validators';

@Component({
  selector: 'app-lazy-post',
  templateUrl: './lazy-post.component.html',
  styleUrls: ['./lazy-post.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LazyPostComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => LazyPostComponent),
      multi: true,
    }
  ]
})
export class LazyPostComponent implements ControlValueAccessor, Validator {

  private onChange: Function;
  private onTouch: Function;

  post: Post
  form: FormGroup = new FormGroup({
    name: new FormControl("", []),
    author: new FormControl("", []),
    text: new FormControl("", []),
    time: new FormControl("", []),
  }, {
    validators: FormGroupValidators.checkForm
  })

  constructor() { }

  validate(control: FormControl): any {
    return this.form.invalid ? {invalidFormat: true} : null;
  }

  writeValue(value: Post): void {
    this.post = {
      ...value
    };
    this.form.patchValue(value)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onFormGroupChange() {
    this.onChange(this.form.value);
  }
}
