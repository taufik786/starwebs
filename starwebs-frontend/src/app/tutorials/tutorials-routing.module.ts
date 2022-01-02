import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TutorialsComponent } from './tutorials.component';

const routes: Routes = [
  { path: '', component: TutorialsComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'css', component: CssComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: '**', redirectTo: '/tutorials' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRoutingModule { }
