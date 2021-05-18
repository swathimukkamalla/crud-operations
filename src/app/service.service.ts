import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  value: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  url = 'http://localhost:3000';
  getEmp(): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employees');
  }

  getEmployee(id: any): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/employees/' + id);
  }

  createlist(employees: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      this.url + '/employees/',
      JSON.stringify(employees),
      this.httpOptions
    );
  }

  updateEmployee(employee: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(
      this.url + '/employees/' + id,
      JSON.stringify(employee),
      this.httpOptions
    );
  }

  deleteEmp(id: Employee) {
    return this.http.delete<Employee>(
      this.url + '/employees/' + id,
      this.httpOptions
    );
  }
  getpager(totalItems: number, currentpage: number = 1, pagesize: number = 3) {
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
  
  
}
