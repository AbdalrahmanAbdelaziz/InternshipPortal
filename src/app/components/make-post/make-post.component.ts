import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      description: ['', [Validators.required]],
      objectives: ['', [Validators.required]],
      location: ['', [Validators.required]],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      applicationDeadline: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const newPost: Post = this.postForm.value;
      //var companyId = 1;
      //newPost.companyId = companyId;
      this.postService.createPost(newPost).subscribe(response => {
        console.log('Post created successfully', response);
        this.postForm.reset(); // Reset form after successful submission
      }, error => {
        console.error('Error creating post', error);
      });
    }
  }
}
