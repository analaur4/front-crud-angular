import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeHome: boolean = false;
  activeList: boolean = false;
  href: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = window.location.href;
    this.setMenu(this.href);
  }

  navegaHome() {
    this.activeHome = true;
    this.activeList = false;

    this.router.navigate(['/home']);
  }

  navegaList() {
    this.activeHome = false;
    this.activeList = true;

    this.router.navigate(['/todo']);
  }

  private setMenu(href: string) {
    if(href.includes('home') || href.includes('')) {
      this.navegaHome();

    } else if(href.includes('todo')) {
      this.navegaList();
    }
  }

}
