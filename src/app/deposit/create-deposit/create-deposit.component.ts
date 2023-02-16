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
  
  constructor(private depositService : DepositService,
    private formBuilder: FormBuilder,
    private api : ApiService){}


    //infoDeposito!: DepositModel;

    deposito! : CreateDeposit;
    account!: Account;
    public formDeposit!: FormGroup ; 

  ngOnInit(): void {
    this.formDeposit = this.initFormDeposit(); 
    this.datosDeposito();
    this.getAccount();

  }
  
  depositar(){
    this.api.createDeposti(this.deposito);
    console.log(this.account.balance);
  }

  getAccount(){
    this.depositService.getAccount(this.deposito.accountId);
    this.depositService.AccountObservable.subscribe(
      (account : Account) =>(this.account = account)
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
