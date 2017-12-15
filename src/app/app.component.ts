import { Component } from '@angular/core';
import { DataComponent } from './data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.navigateTo('Home','');
  }
  navigateTo(sectionName,event){    
    if(event!==''){
      let tempList = document.getElementsByClassName('selected');
      if(tempList.length>0){
        tempList[0].classList.remove('selected');
      }        
      event.target.classList.add('selected');
    }
    DataComponent.prototype.loadMainData(sectionName);
  }
}
