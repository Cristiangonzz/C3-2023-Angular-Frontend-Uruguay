import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { DepositListComponent } from './deposit-list/deposit-list.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormGroupDirective } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateDepositComponent,
    DepositListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    ReactiveFormsModule,
    NgModule,
    FormGroup,
    FormsModule,
  
  ],
  exports:[CreateDepositComponent,
    DepositListComponent,]
})
export class DepositModule { }
