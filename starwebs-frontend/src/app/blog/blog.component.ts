import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs : any;
  splitedUrl = '';
  constructor(private blogService: BlogsService) { }
// tt = "what is full stack developer";
tt = "What is Angular ? ";
  ngOnInit(): void {
    this.blogs = this.blogService.AllBlogs();
    console.log(this.blogs,'pppppp')
    // this.urlNameSplit(this.tt)
  }

  charLimit(data:any){
    if(data.length > 200) {
      data = data.slice(0, 200)+'...';
    }
    return data;
  }
  urlNameSplit(data:any){
    data = data.trim().split(' ');
    // console.log(data)
    for(let i=0; i<data.length; i++) {
      this.splitedUrl += data[i]+'-';
      // console.log(this.splitedUrl)
    }
    return data = this.splitedUrl.slice(0, -1).toLowerCase().trim();
    // console.log(this.splitedUrl.slice(0, -1).toLowerCase().trim(), 'lll')
  }
}
