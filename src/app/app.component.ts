import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
  available: number;
  type: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Neon', price: 20, available: 1, type: 1 },
  { id: 2, name: 'Ideli', price: 20, available: 1, type: 2 },
  { id: 3, name: 'Neon', price: 30, available: 1, type: 2 },
  { id: 4, name: 'Neon', price: 20, available: 1, type: 4 },
  { id: 5, name: 'Neon', price: 40, available: 1, type: 1 },
  { id: 6, name: 'Neon', price: 20, available: 1, type: 2 },
  { id: 7, name: 'Neon', price: 50, available: 1, type: 3 },
  { id: 8, name: 'Neon', price: 20, available: 1, type: 4 },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'available', 'order'];
  dataSource;
  orders = [];

  breakfast() {
    const breakFastItem = ELEMENT_DATA.filter((item) => {
      return item.type === 1 && item.available === 1;
    });
    this.dataSource = breakFastItem;
  }
  lunch() {
    const lunchItem = ELEMENT_DATA.filter((item) => {
      return item.type === 2 && item.available === 1;
    });
    this.dataSource = lunchItem;
  }
  eveningsnacks() {
    const eveningsnacksItem = ELEMENT_DATA.filter((item) => {
      return item.type === 3 && item.available === 1;
    });
    this.dataSource = eveningsnacksItem;
  }
  dinner() {
    const dinnerItem = ELEMENT_DATA.filter((item) => {
      return item.type === 4 && item.available === 1;
    });
    this.dataSource = dinnerItem;
  }
  getOrder(event) {
    // console.log(this.orderArray);
    // console.log(event);
    return this.orders.push({
      id: 5,
      name: 'Neon',
      price: 40,
      available: 1,
      type: 1,
    });
  }
}
