import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {
  value:any;
  getpager(totalItems: number, currentpage: number = 1, pagesize: number = 5) {
    //calculate total pages
    let totalpages = Math.ceil(totalItems / pagesize);
    this.value = totalpages;
    let startpage: number, endpage: number;
    if (totalpages <= 10) {
      // less than total pages so show all
      startpage = 1;
      endpage = totalpages;
    } else {
      //more than 10 total pages
      if (currentpage <= 6) {
        startpage = 1;
        endpage = 10;
      }

      //from 12
      else if (currentpage + 4 >= totalpages) {
        startpage = totalpages - 9;
        endpage = totalpages;
      }
      //from 7
      else {
        startpage=currentpage-5;
        endpage=currentpage+4;
      }
    }
    //calculate start and end indexes
    let startindex=(currentpage-1)*pagesize;
    let endindex=Math.min(startindex + pagesize -1);
    //create an array of pages on ng=-repeat in the pager control
    let pages=Array.from(Array((endpage+1)-startpage).keys()).map(i=>startpage+i);
  
  return {
    totalItems:totalItems,
    currentpage:currentpage,
    pagesize:pagesize,
    startindex:startindex,
    endindex:endindex,
    pages:pages,
    startpage:startpage,
    endpage:endpage
  } 
}
constructor(){}
  
}
