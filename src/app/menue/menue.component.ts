import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.sass']
})
export class MenueComponent implements OnInit {

  paramsValue = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
