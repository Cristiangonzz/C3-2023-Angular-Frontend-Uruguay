import { Component, OnInit } from '@angular/core';
import { TransferService } from '../service/transfer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTransferModel } from '../interface/createTransferModel';
import { TransferModel } from '../interface/transferModel';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-create-transfer',
  providers:[TransferService],
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss']
})
export class CreateTransferComponent implements OnInit{
  
  constructor(public serviceTransfer : TransferService,
    private formBuilder : FormBuilder,
    private router : Router,
    private api : ApiService){}
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
   this.api.createTransfers(this.createTransfer).subscribe(
    (data)=> (console.log(`transferencia =>`,data))
   );
   this.router.navigate(['home']);
 }

}
