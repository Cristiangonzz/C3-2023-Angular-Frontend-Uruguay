import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DepositService } from "../service/deposit.service";
import { CreateDeposit } from "../interface/deposit";
import { Account } from '../../account/interfaces/account';


@Component({
  selector: 'app-create-deposit',
  providers: [DepositService],
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent implements OnInit {

  public formDeposit!: FormGroup; 
  deposit !: CreateDeposit;
  accountUpdate!: Account;

  constructor(
    private formBuilder : FormBuilder,
    private depositService : DepositService){}



  ngOnInit(): void {
    this.formDeposit = this.initFormDeposti()
    this.dataDeposti();
  }

    
    
    initFormDeposti():FormGroup{
      return this.formBuilder.group(
       {
        accountId:['',[Validators.required]],
        amount:['',[Validators.required]],
     });
   }

   dataDeposti(){
    this.deposit.accountId = this.formDeposit.get('accountId')?.value;
    this.deposit.amount = parseInt(this.formDeposit.get('amount')?.value);

   }

   createDeposit(){
      this.depositService.getAccountCustomer(this.deposit);
      this.depositService.DepositAccountObservable.subscribe(
        (data:Account) => (this.accountUpdate = data))

   }
   createNewDeposit(){}


}
