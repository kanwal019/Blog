import { Component,ElementRef } from '@angular/core';
import { AppComponent } from './app.component';
import { SideDate } from './models';
import { SIDEDATES,YEARS,MONTHS } from './mocks/app.mock';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'side-bar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
  })
  export class SidebarComponent {
    sectionName: string;
    sidedates: SideDate[];
    years:string[];
    months:string[];
    today=new Date();
    constructor(private elRef:ElementRef) {}
    ngOnInit(){
      this.sidedates=SIDEDATES;
      this.years=YEARS;
      this.months=MONTHS;
    }
    ngAfterViewInit(){
      let tempMonths= this.elRef.nativeElement.querySelector('#filter-by-date');
      for(let temp of tempMonths){
        if(temp.value==this.months[this.today.getMonth()]){
          temp.setAttribute("selected","");
        }
      }

      let tempYears= this.elRef.nativeElement.querySelector('#filter-by-year');
      for(let temp of tempYears){
        if(temp.value==this.today.getFullYear()){
          temp.setAttribute("selected","");
        }
        if(temp.value>this.today.getFullYear()){
          temp.setAttribute("disabled","");
        }
      }
    }
    loadSideBar(sectionName){
      this.sectionName=sectionName;
    }
  }
  