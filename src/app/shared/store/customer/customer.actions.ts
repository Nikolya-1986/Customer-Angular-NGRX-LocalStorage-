import { Action } from "@ngrx/store";
import { CustomerState } from "./customer.reducer";

export enum customerActionsType {
    load = '[CUSTOMER] load customer item',
    create = '[CUSTOMER] create customer item',
    toggle = '[CUSTOMER] toggle customer item',
    edit = '[CUSTOMER] edit customer item',
    delete = '[CUSTOMER] delete customer item',
    fail = '[CUSTOMER] fail customer item',
}

export class CustomerLoadActions implements Action {
    readonly type = customerActionsType.load;
    constructor(public payload: 
        {
            state: CustomerState
        }
    ){}
}

export class CustomerCreateActions implements Action {
    readonly type = customerActionsType.create;
    constructor(public payload: 
        {
            name: string, 
            phoneNumber: string,
            financialDebt: number
        }
    ) {}
}

export class CustomerToggleActions implements Action {
    readonly type = customerActionsType.toggle;
    constructor(public payload: 
        {
            id: number
        }
    ) {}
}

export class CustomerEditActions implements Action {
    readonly type = customerActionsType.edit;
    constructor(public payload:
        {
            id: number,
            name: string, 
            // phoneNumber: string,
            // financialDebt: number,
        }
    ) {}
}

export class CustomerDeleteActions implements Action {
    readonly type = customerActionsType.delete;
    constructor(public payload: 
        {
            id: number
        }
    ){}
}

export class CustomerFailActions implements Action {
    readonly type = customerActionsType.fail;
    constructor(public payload: string) {}
}

export type CustomerActions = CustomerLoadActions                 
                            | CustomerCreateActions 
                            | CustomerToggleActions 
                            | CustomerEditActions 
                            | CustomerDeleteActions
                            | CustomerFailActions