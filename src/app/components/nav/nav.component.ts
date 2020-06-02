import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeHome: boolean = false;
  activeList: boolean = false;
  href: string;

  constructor() { }

  ngOnInit(): void {
    this.href = window.location.href;
    this.setMenu(this.href);
  }

  navegaHome() {
    this.activeHome = true;
    this.activeList = false;
  }

  navegaList() {
    this.activeHome = false;
    this.activeList = true;
  }

  private setMenu(href: string) {
    if(href.includes('home')) {
      this.activeHome = true;
      this.activeList = false;
    }
    else if(href.includes('todo')) {
      this.activeHome = false;
      this.activeList = true;
    }
  }

}
