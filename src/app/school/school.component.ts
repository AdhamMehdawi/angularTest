import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.sass'],
})
export class SchoolComponent implements OnInit {
 

  
  customers: any[] = [];
  first = 0;
  page = 0;
  rows = 5;
  total = 0;

  constructor(private service: SchoolService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getSchools(this.page).subscribe((customers) => {
      this.customers = customers.result.data ;
      this.total = customers.result.length;
    });
  }

  next() {
    this.page++;
    if ((this.page * this.rows) > 15 &&  (this.page * this.rows) % 15 === 0) {
      this.getData();
    }

    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.customers
      ? this.first === this.customers.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  } 
}
