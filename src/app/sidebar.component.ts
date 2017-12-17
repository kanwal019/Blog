import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { SideDate } from './models';
import { SIDEDATES } from './mocks/app.mock';

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
  })
  export class SidebarComponent {
    sectionName: string;
    sidedates: SideDate[];
    ngOnInit(){
      this.sidedates=SIDEDATES;
    }
    loadSideBar(sectionName){
      this.sectionName=sectionName;
    }
  }
  