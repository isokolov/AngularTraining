import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCourse2020';

  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm-dQHFmWp9Xw1e-4BfLDr67vBq5cil6OytRJExumqHUzTHVZ'

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://angular.io/assets/images/logos/angular/angular.png';
    }, 5000);
  }
}
