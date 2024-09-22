// import { Component, OnInit } from '@angular/core';
// import { PostService } from '../../services/post.service';
//  import { Tag } from '../../shared/models/tag';

// @Component({
//   selector: 'app-tags',
//   templateUrl: './tags.component.html',
//   styleUrls: ['./tags.component.css']
// })
// export class TagsComponent implements OnInit {
//   tags?:Tag[];
//   constructor(postService:PostService) {
//     this.tags = postService.getAllTags();
//    }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Tag } from '../../shared/models/tag';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(postService:PostService) {
    postService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }
}




// import { Component, OnInit } from '@angular/core';
// import { PostService } from '../../services/post.service';
// import { Tag } from '../../shared/models/tag';

// @Component({
//   selector: 'app-tags',
//   templateUrl: './tags.component.html',
//   styleUrls: ['./tags.component.css']
// })
// export class TagsComponent implements OnInit {
//   tags?: Tag[];

//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.postService.getAllTags().subscribe(serverTags => {
//       this.tags = serverTags;
//     });
//   }
// }
