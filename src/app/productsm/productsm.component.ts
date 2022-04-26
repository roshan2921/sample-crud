import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productsm',
  templateUrl: './productsm.component.html',
  styleUrls: ['./productsm.component.css'],
})
export class ProductsmComponent implements OnInit, OnDestroy {
  dataTitle = 'products';
  data: any;
  fetching = false;
  postSubscription: Subscription | undefined;
  @ViewChild('id') id: ElementRef | any;
  @ViewChild('name') name: ElementRef | any;
  @ViewChild('price') price: ElementRef | any;
  editMode: boolean = false;
  editIndex: any;
  constructor() {}
  products = [
    { id: 'p1', name: 'laptop', price: 10000 },
    { id: 'p2', name: 'helo', price: 20000 },
    { id: 'p3', name: 'llast', price: 30000 },
    { id: 'p4', name: 'first', price: 40000 },
    { id: 'p5', name: 'martin', price: 50000 },
    { id: 'p6', name: 'uxtrend', price: 60000 },
    { id: 'p7', name: 'huue', price: 70000 },
    { id: 'p8', name: 'rheu', price: 80000 },
    { id: 'p9', name: 'dhfrh', price: 90000 },
  ];

  ngOnInit(): void {}
  onAdd(id: { value: any }, name: { value: any }, price: { value: any }) {
    if (this.editMode) {
      this.editMode = true;
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value,
      };
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    } else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value,
      });
    }
  }

  onDelete(id: number) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(id, 1);
    }
  }
  onEdit(index: number) {
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }

  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
  }
}
