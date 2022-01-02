import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TutorialsComponent } from './tutorials.component';
import { AngularComponent } from './angular/angular.component';


@NgModule({
  declarations: [
    TutorialsComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    AngularComponent,
  ],
  imports: [
    CommonModule,
    TutorialsRoutingModule
  ]
})
export class TutorialsModule { }
