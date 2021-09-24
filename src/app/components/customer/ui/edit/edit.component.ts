import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customrer.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() customer!: Customer
  @Input() editBlock: boolean = false
  @Output() onEditCustomer = new EventEmitter<string>()
  // @Output() onEditCustomer: EventEmitter<Customer> = new EventEmitter<Customer>()

  editName: string = ''//По умолчанию пустые но придут в копонент с инпутов
  editPhoneNumber: string = ''
  editFinancialDebt: number = +''
  
  constructor() { }

  ngOnInit(): void { 
    this.editName = this.customer.name
    this.editPhoneNumber = this.customer.phoneNumber
    this.editFinancialDebt = this.customer.financialDebt
  }

  editCustomer() {
    if(this.editName.trim() && this.editPhoneNumber.trim() && this.editFinancialDebt) {

      // const editCustomer: Customer = {
      //   name: this.editPhoneNumber,
      //   phoneNumber: this.editPhoneNumber,
      //   financialDebt: this.editFinancialDebt
      // }
      // this.onEditCustomer.emit(editCustomer)
      this.onEditCustomer.emit(this.editName)
    }
  }

  cancel() {
    this.editName = this.customer.name
  }
}
