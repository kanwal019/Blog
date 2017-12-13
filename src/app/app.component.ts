import { Component } from '@angular/core';
import { DataComponent } from './data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.navigateTo('Home');
  }
  navigateTo(sectionName){
    DataComponent.prototype.loadMainData(sectionName);
  }
}
