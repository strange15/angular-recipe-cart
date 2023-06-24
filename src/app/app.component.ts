import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-recipe-cart';
  currentTab = 'recipes';

  onChangeTab(tab: string) {
    this.currentTab = tab;
  }
}
