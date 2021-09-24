import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomersStorageService } from 'src/app/services/customers-storage.service';
import { CustomerState } from 'src/app/shared/store/customer/customer.reducer';
import { customerListSelector } from 'src/app/shared/store/customer/customer.selector';
import { CustomerCreateActions, CustomerDeleteActions, CustomerEditActions, CustomerToggleActions } from 'src/app/shared/store/customer/customer.actions';

import { Customer } from 'src/app/shared/interfaces/customrer.interface';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  customerList$: Observable<Customer[]> = this.store$.pipe(select(customerListSelector))//из хранилища вернёться Observable который хранит в себе массив Customer
 
  constructor(
    private store$: Store<CustomerState>,
    private customerStorage: CustomersStorageService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.customerStorage.init()
  }

  createCustomer(customer: Customer) {
    console.log("Create new customer: ", customer)
    this.store$.dispatch(new CustomerCreateActions(
      {
        name: customer.name,
        phoneNumber: customer.phoneNumber,
        financialDebt: customer.financialDebt
      }
    ))
  }

  toggleCustomer(id: number) {
    console.log("Toggle customer: ", id)
    this.store$.dispatch(new CustomerToggleActions(
      {
        id: id 
      }
    ))
  }

  editCustomer({ id, name }: {id: number, name: string}) {
    console.log("Edit customer: ", id)
    this.store$.dispatch(new CustomerEditActions(
      {
        id, 
        name
      }
    ))
  }

  removeCustomer(id: number) {
    console.log("Delete customer: ", id)
    this.store$.dispatch(new CustomerDeleteActions(
      {
        id: id 
      }
    ))
  }

  openModal(id: number) {
    this.modalService.open()
  }
}
