import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../services/post-data.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms'
import { FormGroupValidators } from '../validators/form-group.validators';

@Component({
  selector: 'app-lazy-posts-page',
  templateUrl: './lazy-posts-page.component.html',
  styleUrls: ['./lazy-posts-page.component.css']
})
export class LazyPostsPageComponent implements OnInit {

  public form: FormGroup

  constructor(
    public postDataService: PostDataService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      posts: this.formBuilder.array([])
    }, {
      validator: FormGroupValidators.checkForm
    });
    this.getPosts();
  }

  get controls(): AbstractControl[] {
    return (this.form.get('posts') as FormArray)?.controls || [];
  }

  getPosts(): void {
    const subscription$ = this.postDataService.getPostsStream()
      .subscribe(postsArr => {
        this.postDataService.posts = postsArr;
      }).add(() => {
      this.postDataService.posts.forEach( item => {
        (this.form.get('posts') as FormArray).push(this.formBuilder.control(item));
        subscription$.unsubscribe();
      })
    })
  }

  postChanged(): void {
    console.log(this.form.value.posts);
  }

  isInvalid(): boolean {
    console.log(this.form.errors ? this.form.errors.wrongFormat : false);
    return this.form.errors ? this.form.errors.wrongFormat : false;
  }

}
