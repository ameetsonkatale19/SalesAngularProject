import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl:'./sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
// Create an array of Object
  salesPersonList : SalesPerson [] =[
    new SalesPerson("amit","sonkatle","amit.sonkatle@gmail.com",5000000),
    new SalesPerson("laxman","kadam","laxman.kadam@gmail.com",7000000),
    new SalesPerson("atul","survase","atul.survase@gmail.com",6000000),
    new SalesPerson("samarth","survase","samarth.survase@gmail.com",6000000),
    new SalesPerson("pravin","dhoke","pravin.dhoke@gmail.com",3000000)
  ]
}
