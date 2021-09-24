import { createSelector, State } from "@ngrx/store";
import { CustomerActions, customerActionsType } from "./customer.actions";

import { Customer } from "../../interfaces/customrer.interface";


export const CUSTOMER_REDUSER_NODE = "customer"; 

export interface CustomerState {
    idIncriment: number;
    customerList: Customer[];
}

const initialState: CustomerState = {
    idIncriment: 1,
    customerList: []
}

export const customerReduser = (state = initialState, action: CustomerActions) => {
    switch(action.type) {

        case customerActionsType.load:
            return {
                ...action.payload.state
            }

        case customerActionsType.create:
            return {
                ...state,
                idIncriment: state.idIncriment + 1,
                customerList: [
                    ...state.customerList,
                    {
                        id: state.idIncriment,
                        name: action.payload.name,
                        phoneNumber: action.payload.phoneNumber,
                        financialDebt: action.payload.financialDebt,
                        completed: false
                    }
                ]
            };
        
        case customerActionsType.toggle:
            return {
                ...state,
                customerList: state.customerList.map(customer => customer.id === action.payload.id ? {
                    ...customer,
                    completed: !customer.completed
                } : customer)
            }
        
        case customerActionsType.edit:
            return {
                ...state,
                customerList: state.customerList.map(customer => customer.id === action.payload.id ? {
                    ...customer,
                    name: action.payload.name,
                    // phoneNumber: action.payload.phoneNumber,
                    // financialDebt: action.payload.financialDebt,
                } : customer)
            }

        case customerActionsType.delete:
            return {
                ...state,
                customerList: state.customerList.filter(customer => customer.id !== action.payload.id)
            };
        
        case customerActionsType.fail:
            return {
                ...state,
                error: action.payload
            }

        default: 
            return state;
    }
    
}
