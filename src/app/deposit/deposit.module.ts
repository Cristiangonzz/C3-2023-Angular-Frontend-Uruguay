import { NgModule } from '@angular/core';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateDepositComponent,
    DepositListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    CreateDepositComponent,
    DepositListComponent]
})
export class DepositModule { }
