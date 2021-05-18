import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { PageserviceService } from '../pageservice.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  employees:Employee[]=[];
  empdata: any=[];
  searchkey: any;
  p:number;
  q:number;
  // id:any;
  pageSize: number;

  constructor(private service:ServiceService,private act:ActivatedRoute,private ps:PageserviceService,
    private router:Router) { }


    id=this.act.snapshot.params['id'];
ngOnInit() {
  this.loademp();
  this.setPage(this.pager)
}
loademp() {
  return this.service.getEmp().subscribe((data: any) => {
    this.employees = data;
    this.empdata = data;
    this.pagedItems=data;
     this.setPage(this.pager);
  });
}

deleteEmp(id: any) {
  if (window.confirm('Are you sure, you want to delete?')) {
    this.service.deleteEmp(id).subscribe(data => {
      this.loademp();
    });
  }
}
search() {
  let tempData = [...this.employees];
  this.empdata = tempData.filter((data: any) => {
    return data.fname.toLowerCase().includes(this.searchkey.toLowerCase());
  });

}
search1() {
  let tempData = [...this.employees];
  this.empdata = tempData.filter((data: any) => {
    return data.tNum1.toLowerCase().includes(this.searchkey.toLowerCase()||
    data.email.toString().includes(this.searchkey.toLowerCase()));
  });
  

}
search2() {
  let tempData = [...this.employees];
  this.empdata = tempData.filter((data: any) => {
    return data.email.toLowerCase().includes(this.searchkey.toLowerCase());
  });

}
updatepagesize(pageSize:number){
  this.pageSize=pageSize;
  this.loademp();
}
pagedItems:any[];
pager:any={};
setPage(page:number){
  this.pager=this.service.getpager(this.employees.length,page);
  //get current page of items
  this.empdata=this.employees.slice(this.pager.startindex,
    this.pager.endindex +1);
}

sortType: string;
sortReverse: boolean = false;
sortOrders(property: any) {
  this.sortType = property;
  this.sortReverse = !this.sortReverse;
  this.empdata.sort(this.dynamicSort(property));
}

dynamicSort(property: any) {
  let sortOrder = -1;

  if (this.sortReverse) {
    sortOrder = 1;
  }

  return function(a: any, b: any) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}
ondropdownchange($event:any){
  this.pager=thi
}
}
