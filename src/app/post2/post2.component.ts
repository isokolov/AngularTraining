import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {

  backgroundToggle = false;
  toggle = false;
  toggle2: any;

  arr = [1, 1, 2, 3, 5, 8, 13];

  objs = [
    {title: 'Post 1', author: 'Vladilen', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Vladilen 2', comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'},
      ]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
