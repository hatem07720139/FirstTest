import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-adress-book',
  templateUrl: './my-adress-book.component.html',
  styleUrls: ['./my-adress-book.component.css']
})
export class MyAdressBookComponent implements OnInit {
table:any;
search='';
  constructor() { }

  ngOnInit() {
    this.table=[{name:'hatem shili',phone:'26664593'},
    {name:'hatem shili',phone:'26664593'},
    {name:'med shili',phone:'26664593'},
    {name:'exemple shili',phone:'26664593'},
    {name:'shili shili',phone:'26664593'},
    {name:'hatem shili',phone:'26664593'}
  ];
  }

}
