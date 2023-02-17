import { Component, OnInit } from '@angular/core';
import { DepositService } from '../service/deposit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateDeposit } from '../interface/deposit';
import { Account } from '../../account/interfaces/account';
import { ApiService } from 'src/app/api/api.service';
import { DepositModel } from '../interface/depositModel';

@Component({
  selector: 'app-create-deposit',
  providers: [DepositService],
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent implements OnInit {
  
  constructor(public depositService : DepositService,
    private formBuilder: FormBuilder,
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
    this.datosDeposito();
    this.depositService.createDeposit(this.deposito);
    this.depositService.createDepositObservable.subscribe(
      (data:DepositModel) => (this.infoUltimoDeposito = data)
    );
    console.log(this.infoUltimoDeposito);
  }

  getAccount(){
    this.depositService.getAccount(this.deposito.accountId);
    this.depositService.AccountObservable.subscribe(
      (account : Account) =>(console.log(account))
    );
  }

  datosDeposito(){
    this.deposito.accountId = this.formDeposit.get('accountId')?.value;
    this.deposito.amount = parseInt(this.formDeposit.get('amount')?.value);
  }

  initFormDeposit():FormGroup{
    return this.formBuilder.group(
     {
      accountId:['',[Validators.required]],
      amount:['',[Validators.required]],
   });
 }


}
