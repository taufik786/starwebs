import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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
  li_non: any;
  showIcon = true;
  crossIcon = false;

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
  public innerWidth: any;
  ngOnInit() {
      // this.innerWidth = window.innerWidth;
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
  @HostListener('window:resize', ['$event'])
onResize(event:any) {
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth)
  let ul_list = <HTMLElement>document.getElementById('ul-list');
  if(this.innerWidth > 800 ) {
    ul_list.classList.add('ul-class');
    ul_list.classList.remove('ul-class-non');
    ul_list.classList.remove('ul-class-blok');
  } else if(this.innerWidth < 800 && this.crossIcon == true){
    ul_list.classList.remove('ul-class');
    ul_list.classList.add('ul-class-blok');
  } else if(this.innerWidth < 800 && this.showIcon === true){
    ul_list.classList.remove('ul-class-blok');
    ul_list.classList.remove('ul-class');
  }
}
  toggleBar(){
    this.showIcon = false;
    this.crossIcon = true;
    let ul_list = <HTMLElement>document.getElementById('ul-list');
    ul_list.classList.add('ul-class-blok');
    ul_list.classList.remove('ul-class-res');
  }
  closeBar(){
    this.crossIcon = false;
    this.showIcon = true;
    let ul_list = <HTMLElement>document.getElementById('ul-list');
    ul_list.classList.add('ul-class-non');
    ul_list.classList.remove('ul-class-blok');
  }
  hideUl(){
    let ul_list = <HTMLElement>document.getElementById('ul-list');
    ul_list.classList.add('ul-class-res');
    ul_list.classList.remove('ul-class-blok');
    this.crossIcon = false;
    this.showIcon = true;
  }

  ngOnDestroy() {
    // this.urlSubscription.unsubscribe();s
  }
}
