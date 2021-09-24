import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CustomerState, CUSTOMER_REDUSER_NODE } from "./customer.reducer";


export const customerFeatureSelector = createFeatureSelector<CustomerState>(CUSTOMER_REDUSER_NODE) 

export const customerListSelector = createSelector(
  customerFeatureSelector,
  state => state.customerList
)