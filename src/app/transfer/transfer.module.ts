import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateTransferComponent,
    TransferListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    CreateTransferComponent,
    TransferListComponent],
})
export class TransferModule { }
