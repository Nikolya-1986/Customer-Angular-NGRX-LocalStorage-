import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

import { Customer } from 'src/app/shared/interfaces/customrer.interface';
import { financialDebtValidator } from 'src/app/shared/validators/validators.finance';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  @Output() onCreateCustomer: EventEmitter<Customer> = new EventEmitter<Customer>()
  @Output() onOpenModal = new EventEmitter<number>()
  title: string = "Create new customer"

  formCustomers!: FormGroup;
  name: string = ''
  phoneNumber: string = ''
  financialDebt: number = +''

  constructor(
    private formBilder: FormBuilder,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.formCustomers = this.formBilder.group({
      nameOrganization: ['',
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z][a-zA-Z]{2,10}$")
        ]
      ],
      phoneNumberCustomer: ['',
        [
          Validators.required,
          Validators.pattern("^[0-9]{3}\-([0-9]{2})\-[0-9]{7}$")
        ]
      ],
      financialDebtCustomer: ['',
        [
          Validators.required,
          financialDebtValidator
        ]
      ]
    })
  }

  createCustomer() {
    if(this.name.trim() && this.phoneNumber.trim() && this.financialDebt) {

      const newCustomer: Customer = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        financialDebt: this.financialDebt,
        completed: false
      }

      this.onCreateCustomer.emit(newCustomer)
      this.formCustomers.reset()
    }
  }

  openModal() {
    this.modalService.open()
  }
}
