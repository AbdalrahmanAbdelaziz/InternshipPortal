// import { Injectable } from '@angular/core';
// import { Post, Internship } from '../shared/models/post';
// import { sample_posts, sample_tags } from "../../data";
// import { Tag } from '../shared/models/tag';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   constructor() { }

//   getAll(): Post[] {
//     return sample_posts;
//   }

//   getPostById(id: string): Post | undefined {
//     return this.getAll().find(post => post.id === id);
//   }

//   getAllPostsBySearchTerm(searchTerm: string): Post[] {
//     return this.getAll().filter(post => 
//       post.company.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

//   getAllTags(): Tag[] {
//     return sample_tags;
//   }

//   getAllPostsByTag(tag: string): Post[] {
//     return tag === "All" ?
//       this.getAll() :
//       this.getAll().filter(post => 
//         post.internships.some(internship => internship.tags?.includes(tag))
//       );
//   }
// }



// import { Injectable } from '@angular/core';
// import { sample_posts, sample_tags } from '../../data';
// import { Post } from '../shared/models/post';
// import { Tag } from '../shared/models/tag';
// import { Observable, of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { POSTS_BY_SEARCH_URL, POSTS_BY_TAG_URL, POSTS_TAGS_URL, POSTS_URL, POST_BY_ID_URL } from '../shared/constants/urls';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   constructor(private http:HttpClient) { }

  
//   getAll(): Observable<Post[]> {
//     return this.http.get<Post[]>(POST_URL);
//   }

//   getAllPostsBySearchTerm(searchTerm: string): Observable<Post[]> {
//     return of(
//       this.getAllSync().filter(post =>
//         post.company.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }

//   getAllPostsByInternshipTag(tag: string): Observable<Post[]> {
//     return of(
//       tag === "All" ?
//         this.getAllSync() :
//         this.getAllSync().filter(post => 
//           post.internships.some(internship => internship.tags.includes(tag))
//         )
//     );
//   }

//   // For internal use, synchronous method
//   private getAllSync(): Post[] {
//     return sample_posts;
//   }

//   getPostById(postId: string): Observable<Post> {
//     const post = this.getAllSync().find(post => post.id == postId);
//     return of(post ?? new Post());
//   }

//   // Add the getAllTags method to return tags
//   getAllTags(): Observable<Tag[]> {
//     return of(sample_tags);
//   }
// }





  






import { Injectable } from "@angular/core";
import { Post, Internship } from "../shared/models/post";
import { sample_posts, sample_tags } from "../../data";
import { Tag } from "../shared/models/tag";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { POST_BY_ID_URL, POSTS_BY_SEARCH_URL, POSTS_BY_TAG_URL, POSTS_TAGS_URL, POSTS_URL } from "../shared/constants/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(POSTS_URL);
  }

  getAllPostsBySearchTerm(searchTerm: string) {
    return this.http.get<Post[]>(POSTS_BY_SEARCH_URL + searchTerm);
  }



  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(POSTS_TAGS_URL);
  }

  getAllPostsByTag(tag: string): Observable<Post[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Post[]>(POSTS_BY_TAG_URL + tag);
  }

  getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(POST_BY_ID_URL + postId);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(POSTS_URL, post);
  }


}