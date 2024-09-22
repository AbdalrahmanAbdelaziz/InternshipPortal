// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { PostService } from '../../services/post.service';
// import { Post } from '../../shared/models/post';

// @Component({
//   selector: 'app-post-page',
//   templateUrl: './post-page.component.html',
//   styleUrls: ['./post-page.component.css']
// })
// export class PostPageComponent implements OnInit {
//   post!: Post;

//   constructor(
//     private activatedRoute: ActivatedRoute, 
//     private postService: PostService,  
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe((params) => {
//       if (params.id) {
//         const post = this.postService.getPostById(params.id);
//         if (post) {
//           this.post = post;
//         } else {
//           // Handle the case where the post is not found
//           console.error('Post not found');
//           this.router.navigate(['/not-found']);
//         }
//       }
//     });
//   }

//   applyNow(internshipId: string): void {
//     this.router.navigate(['/apply', internshipId]); 
//   }
// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service'; 
import { Post } from '../../shared/models/post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post!: Post;
  constructor(activatedRoute:ActivatedRoute, postService:PostService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        postService.getPostById(params.id).subscribe(serverPost => {
          this.post = serverPost;
        });
      })
     }
   
     ngOnInit(): void {
    }



  applyNow(internshipId: string): void {
    this.router.navigate(['/apply', internshipId]); 
  }
}
