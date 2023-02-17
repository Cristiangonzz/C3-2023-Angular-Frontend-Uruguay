import { Component, OnInit } from '@angular/core';
import { DepositService } from '../service/deposit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateDeposit } from '../interface/deposit';
import { Account } from '../../account/interfaces/account';
import { ApiService } from 'src/app/api/api.service';
import { DepositModel } from '../interface/depositModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-deposit',
  providers: [DepositService],
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent implements OnInit {
  
  constructor(public depositService : DepositService,
    private formBuilder: FormBuilder,
    private router : Router,
    private api : ApiService){}


    infoUltimoDeposito!: DepositModel;

    deposito : CreateDeposit = {
      accountId: "1",
      amount: 10000
    };

    account!: Account;

    public formDeposit!: FormGroup ; 

  ngOnInit(): void {
    this.formDeposit = this.initFormDeposit(); 
    
    
  }
  
  depositar(){
    this.deposito.accountId = this.formDeposit.get('accountId')?.value;
    this.deposito.amount = this.formDeposit.get('amount')?.value;
    this.api.createDeposti(this.deposito).subscribe(
      (data)=> (console.log(`Deposito =>`,data))
    )
   // this.router.navigate(['/home']);
  }


  initFormDeposit():FormGroup{
    return this.formBuilder.group(
     {
      accountId:['',[Validators.required]],
      amount:['',[Validators.required]],
   });
 }


}
