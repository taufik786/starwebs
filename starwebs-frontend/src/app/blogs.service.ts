import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BlogsService {
  blogsPost = [
    {
      "name":"What is Angular ? ",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?"
    },
    {
      "name":"What is object oriented programming language ? ",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?"
    },
    {
      "name":"What is MEAN STACK Developer ? ",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?"
    },
    {
      "name":"What is java ? ",
      "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos commodi quasi perferendis incidunt? Fuga dolor perferendis necessitatibus rem porro id, hic officiis aliquid, dolorem provident sapiente quae dignissimos similique?"
    },
  ]

  constructor(private http: HttpClient){}

  AllBlogs(){
    // return this.http.get()
    return this.blogsPost;
  }
}
