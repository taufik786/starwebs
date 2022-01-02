import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentRoute: any;
  url = '/tutorials';
  tutorial: any;
  active = '';
  // urlSubscription: Subscription;
  urlFlase = false;
  currUrl: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.urlSubscription = this.router.events.subscribe(event => {
    //   this.currentRoute = event;
    //   this.currUrl = this.currentRoute.url;
    //   if (this.currUrl === this.url + '/angular') {
    //     // let tutorial = document.getElementById('tutorial');
    //     // this.tutorial.classList.add('active');
    //     // this.active = 'active';
    //     this.urlFlase = true;
    //     console.log(this.currUrl)
    //   } else {
    //     // this.tutorial.classList.remove('active');
    //     // this.active = '';
    //     // this.urlFlase = false;
    //   }
    // });
  }

  ngOnInit(): void {
    // this.urlSubscription = this.router.events.subscribe(event => {
    //     this.currentRoute = event;
    //     this.currUrl = this.currentRoute.url;
    //     if (this.currUrl === this.url + '/angular') {
    //       // let tutorial = document.getElementById('tutorial');
    //       // this.tutorial.classList.add('active');
    //       // this.active = 'active';
    //       this.urlFlase = true;
    //       console.log(this.currUrl)
    //     } else {
    //       // this.tutorial.classList.remove('active');
    //       // this.active = '';
    //       // this.urlFlase = false;
    //     }
    //   });
  }

  ngOnDestroy() {
    // this.urlSubscription.unsubscribe();s
  }
}
