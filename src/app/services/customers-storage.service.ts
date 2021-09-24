import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { CustomerLoadActions } from '../shared/store/customer/customer.actions';
import { CustomerState } from '../shared/store/customer/customer.reducer';
import { customerFeatureSelector } from '../shared/store/customer/customer.selector';


export const CUSTOMER_LOCALSTORAGE_KEY = 'customer';

@Injectable({
  providedIn: 'root'
})

export class CustomersStorageService {

  private isInit: boolean = false
  constructor(private store$: Store<CustomerState>) { }

  init() {
    if(this.isInit) {
      return;
    }

    this.isInit = true
    this.loadFromStorage()

    this.store$.pipe(
      select(customerFeatureSelector),
      filter(state => !!state)
      ).subscribe(state => {
        localStorage.setItem(CUSTOMER_LOCALSTORAGE_KEY, JSON.stringify(state));
    })

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(CUSTOMER_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(new CustomerLoadActions({
        state: JSON.parse(storageState)
      }));
    }
  }
}