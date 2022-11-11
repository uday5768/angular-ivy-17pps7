import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
             <h1>Heyy {{first_name}} Narayan {{sur_name}}</h1>
             <p>Angular is fun</p>  
  `,
  styles: [`
  h1 {
     font-family: Lato;
     color:red;
     }
  p{
    font-style:italic;
    font-size:20px;
  }
  
  `],
})
export class HelloComponent {
  @Input() first_name: any;
  @Input() sur_name: any;
  
}
