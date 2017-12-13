import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { ARTICLES } from './mocks/article.mock';
import { Article } from './article';

@Component({
  selector: 'main',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  mainData: string;
  articles : Article[];

  ngOnInit(){
    this.articles=ARTICLES;
  }
  loadMainData(sectionName){
    this.mainData='This is '+sectionName+' page.';
  }
}
