import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../../account/interfaces/account';
import { CreateDeposit } from '../interface/deposit';

@Injectable({
  providedIn: 'root'
})
export class DepositService implements OnDestroy {

  constructor(private api : ApiService) { }


  //repito codigo para evitar errores con los modelos signUp y customer
  protected DepositAccount!: Account;
  public DepositAccountObservable : BehaviorSubject<Account> = 
  new BehaviorSubject<Account>(this.DepositAccount);
  
  ngOnDestroy(): void {
    this.DepositAccountObservable.unsubscribe()
  }
  getAccountCustomer(account : CreateDeposit){
    if(this.DepositAccountObservable.observed && this.DepositAccountObservable.closed){
      this.api.createDeposti(account).subscribe(
        {
          next: (data:Account)=>(this.DepositAccount = data),
          complete: ()=>(this.DepositAccountObservable.next(this.DepositAccount))

        }
      )
    }
    
  }

}
