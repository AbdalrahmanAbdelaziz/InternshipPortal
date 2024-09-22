// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { PostService } from '../../services/post.service';
// import { Post } from '../../shared/models/post';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

  
//   posts: Post[] = [];
//   constructor(private postService: PostService, activatedRoute: ActivatedRoute) {
//     activatedRoute.params.subscribe((params) => {
     
//       if (params.searchTerm)
//         this.posts = this.postService.getAllPostsBySearchTerm(params.searchTerm);
//       else if (params.tag)
//         this.posts = this.postService.getAllPostsByTag(params.tag);
//       else
//         this.posts = postService.getAll();
//     })

//   }
//   ngOnInit(): void {
//   }
// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../shared/models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    let postsObservable: Observable<Post[]> | undefined;

    // Subscribe to route parameters and load posts accordingly
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        postsObservable = this.postService.getAllPostsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        postsObservable = this.postService.getAllPostsByTag(params.tag); // Corrected method name
      } else {
        postsObservable = this.postService.getAll();
      }

      // Ensure the postsObservable is defined before subscribing
      if (postsObservable) {
        postsObservable.subscribe((serverPosts) => {
          this.posts = serverPosts;
        });
      }
    });
  }

  ngOnInit(): void {}
}





// import { Component, OnInit } from '@angular/core';
// import { Post } from '../../shared/models/post';
// import { PostService } from '../../services/post.service';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs';
// import { server } from 'typescript';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit{

//   posts:Post[] = [];

//   constructor(private postService:PostService, activatedRoute: ActivatedRoute){
//     let postsObservable : Observable<Post[]>;
//     activatedRoute.params.subscribe((params) =>{
//       if(params.searchTerm)
//         postsObservable = this.postService.getAllPostsBySearchTerm(params.searchTerm);
//       else if (params.tag)
//         postsObservable = this.postService.getAllPostsByTag(params.tag);
//       else
//       postsObservable = postService.getAll();

//       postsObservable.subscribe((serverPosts) => {
//         this.posts = serverPosts;
//       })
//     })
//   }

//   ngOnInit(): void {
      
//   }

// }
