import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Post } from '../interfaces/response.interface';

@Component({
  selector: 'app-lazy-post',
  templateUrl: './lazy-post.component.html',
  styleUrls: ['./lazy-post.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LazyPostComponent),
      multi: true,
    }
  ]
})
export class LazyPostComponent implements ControlValueAccessor {

  private onChange: Function;
  private onTouch: Function;

  post: Post
  form: FormGroup = new FormGroup({
    name: new FormControl("", []),
    author: new FormControl("", []),
    text: new FormControl("", []),
    time: new FormControl("", []),
  })

  constructor() { }

  writeValue(value: Post): void {
    this.post = {
      ...value
    };
    Object.keys(this.post).forEach( item => {
      this.form.get(item).setValue(this.post[item]);
    })
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
