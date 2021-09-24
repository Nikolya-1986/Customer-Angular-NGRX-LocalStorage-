import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/interfaces/customrer.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() customer!: Customer
  @Output() onRemoveCustomer = new EventEmitter<void>()
  @Output() onToggleCustomer = new EventEmitter<void>()
  @Output() onEditCustomer = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  editCustomer() {
    this.onEditCustomer.emit()
  }

  toggleCustomer(event: { preventDefault: () => void; }) {//id передовать не нужно так как этот компонент отвечает за один элемент
    event.preventDefault();//запрет на переключение при нажатии
    this.onToggleCustomer.emit()
  }

  removeCustomer() {//id передовать не нужно так как этот компонент отвечает за один элемент
    this.onRemoveCustomer.emit()
  }

}
