import { findInputsOnElementWithTag } from '@angular/cdk/schematics/ng-update/html-parsing/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  // styleUrls: ['./order-table.component.css'],
})
export class OrdertableComponent implements OnInit {
  // @Input() orders;
  // data;
  displayedColumns: string[] = ['id', 'name', 'price', 'available'];
  // dataSource;
  @Input()
  set orders(orders) {
    // this.data = orders;
    if (this.dataSource !== null) {
      this.dataSource = orders;
    }
  }
  public dataSource = null;
  private data = null;

  ngOnInit(): void {
    // console.log(this.data);
    console.log(this.dataSource.data);
    console.log(this.dataSource);
    console.log(this.orders);
  }
}
