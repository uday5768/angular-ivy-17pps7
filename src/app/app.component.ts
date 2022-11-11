import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <!-- <hello></hello> -->
    <hello first_name="{{first_name}}" sur_name="{{sur_name}}"></hello>
    <p>Play with it</p>
    
  `,
  styles: [
    `
    
  `,
  ],
})
export class AppComponent {
  first_name = 'Uday';
  sur_name = 'Seth';
}
