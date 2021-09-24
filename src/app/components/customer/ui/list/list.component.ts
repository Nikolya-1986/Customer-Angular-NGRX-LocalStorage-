import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Customer } from 'src/app/shared/interfaces/customrer.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() customerList: Customer[] | any = []
  @Output() onRemoveCustomer = new EventEmitter<number>()
  @Output() onToggleCustomer = new EventEmitter<number>()
  @Output() onEditCustomer = new EventEmitter<{ name: string, id: number }>()
  // @Output() onEditCustomer = new EventEmitter<Customer>()

  title: string = "List of debtors"
  editIds: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

  toggleCustomer(id: number) {
    this.onToggleCustomer.emit(id)
  }

  editCustomer(name: string, id: number) {
    this.editIds = this.editIds.filter(item => item !== id)
    this.onEditCustomer.emit({ name, id })
  }

  // editCustomer(name: string, id: number, phoneNumber: string, financialDebt: number) {
  //   this.onEditCustomer.emit({ id, name, phoneNumber, financialDebt })
  // }

  editCustomerMode(id: number) {
    this.editIds.push(id)
  }

  removeCustomer(id: number) {
    this.onRemoveCustomer.emit(id)
  }

}
