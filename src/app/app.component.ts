import { Component } from '@angular/core';

export interface MyInterface {
  one?: string;
  two?: string;
  three?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myData: MyInterface = {
    one: 'One',
    two: 'Two',
  };
}
