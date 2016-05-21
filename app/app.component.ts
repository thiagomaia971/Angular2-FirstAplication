import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'my-app',
  template: '<h1>{{pageTitle}}</h1> <login></login>',
  directives: [LoginComponent]
})

export class AppComponent {
  pageTitle: string = "My First App in Angular 2";
}
