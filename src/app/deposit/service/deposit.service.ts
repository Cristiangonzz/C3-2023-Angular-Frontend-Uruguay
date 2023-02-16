import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../../account/interfaces/account';
import { CreateDeposit } from '../interface/deposit';
import { DepositModel } from '../interface/depositModel';

@Injectable({
  providedIn: 'root'
})
export class DepositService implements OnDestroy {

  constructor(private api : ApiService) { }


  //Todos los deposito
  protected DepositAll: DepositModel[] = [];
  public DepositAllObservable : BehaviorSubject<DepositModel[]> = 
  new BehaviorSubject<DepositModel[]>(this.DepositAll);

  //repito codigo para evitar errores con los modelos signUp y customer
  protected Account!: Account;
  public AccountObservable : BehaviorSubject<Account> = 
  new BehaviorSubject<Account>(this.Account);
  
  ngOnDestroy(): void {
    this.AccountObservable.unsubscribe();
    this.DepositAllObservable.unsubscribe();
  }

  getDepositAll(){
    if(this.DepositAllObservable.observed && this.DepositAllObservable.closed){
      this.api.getDeposit().subscribe(
        {
          next: (data:DepositModel[])=>(this.DepositAll = data),
          complete: ()=>(this.DepositAllObservable.next(this.DepositAll))

        }
      )
    }
  }
  
  getAccount(accountId : string){
    if(this.AccountObservable.observed && this.AccountObservable.closed){
      this.api.getAccount(accountId).subscribe(
        {
          next: (data:Account)=>(this.Account = data),
          complete: ()=>(this.AccountObservable.next(this.Account))

        }
      )
    }
  }
  

}
