import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { customerReduser, CUSTOMER_REDUSER_NODE } from 'src/app/shared/store/customer/customer.reducer';
import { StoreModule } from '@ngrx/store';

import { PageComponent } from './page/page.component';
import { WidgetComponent } from './widget/widget.component';
import { CreateCustomerComponent } from './ui/create-customer/create-customer.component';
import { ValidationComponent } from './ui/validation/validation.component';
import { ListComponent } from './ui/list/list.component';
import { ItemComponent } from './ui/item/item.component';
import { EditComponent } from './ui/edit/edit.component';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [
    PageComponent,
    WidgetComponent,
    CreateCustomerComponent,
    ValidationComponent,
    ListComponent,
    ItemComponent,
    EditComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "", component: PageComponent
      }
    ]),
    StoreModule.forFeature(CUSTOMER_REDUSER_NODE, customerReduser),
  ],
  exports: [
    RouterModule,
    WidgetComponent
  ],
})

export class CustomerModule { }