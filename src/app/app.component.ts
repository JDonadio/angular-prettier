import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = "'pretty-angular' pretty 'angular'";

  customFuction() {
    console.log('customFuction');
    const a = {
      1: 1,
      2: 1,
    };
  }
}
