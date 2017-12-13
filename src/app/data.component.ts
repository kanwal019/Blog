import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'main',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  mainData: string;
  articles = ['One','Two','Three','Four','Five'];

  loadMainData(sectionName){
    this.mainData='This is '+sectionName+' page.';
  }
}
