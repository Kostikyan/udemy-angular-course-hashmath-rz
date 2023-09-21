import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "lorem ispum"
    },
    {
      id: 2,
      title: "Title 2",
      content: "lorem ispum"
    },
    {
      id: 3,
      title: "Title 3",
      content: "lorem ispum"
    },
    {
      id: 4,
      title: "Title 4",
      content: "lorem ispum"
    },
    {
      id: 5,
      title: "Title 5",
      content: "lorem ispum"
    },
  ]

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(value => {
      console.log(value.get('page'))
      console.log(value.get('orderBy'))
    })
  }
}
