import { Component, OnInit } from '@angular/core';
import { TransferService } from '../service/transfer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransferModel } from '../interface/createTransferModel';
import { TransferModel } from '../interface/transferModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transfer',
  providers:[TransferService],
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss']
})
export class CreateTransferComponent implements OnInit{
  
  constructor(public serviceTransfer : TransferService,
    private formBuilder : FormBuilder,
    private router : Router){}
    fromTransfer!:FormGroup;
    createTransfer!: CreateTransferModel;
  
  
  
  
  
  ngOnInit(): void {
    this.fromTransfer = this.initFormTransfer();
  }


  initFormTransfer():FormGroup{
    return this.formBuilder.group(
     {
      outcome:['',[Validators.required]],
      income:['',[Validators.required]],
      amount:['',[Validators.required]],
      reason:['',[Validators.required]],
   });

 }
 transferir(){
   this.createTransfer = this.fromTransfer.getRawValue();
   this.serviceTransfer.createTransfer(this.createTransfer);
   this.serviceTransfer.transferObservable.subscribe(
    (data : TransferModel) => (console.log(data)
    ));

 }

}
