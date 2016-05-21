import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'my-app',
  template: ' <login></login>',
  directives: [LoginComponent]
})

export class AppComponent {
}
