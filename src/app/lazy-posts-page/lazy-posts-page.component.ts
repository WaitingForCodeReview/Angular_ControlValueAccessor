import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../services/post-data.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms'

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
      posts: this.formBuilder.array([]),
    });
    this.getPosts();
  }

  get controls(): AbstractControl[] {
    return (this.form.get('posts') as FormArray)?.controls || [];
  }

  getPosts(): void {
    this.postDataService.getPostsStream()
      .subscribe(postsArr => {
        postsArr.forEach( item => {
          (this.form.get('posts') as FormArray).push(this.formBuilder.control(item));
        })
      })
  }

  postChanged(): void {
    console.log(this.form.value.posts);
  }

}
