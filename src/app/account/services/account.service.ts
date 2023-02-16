import { Injectable, OnDestroy } from '@angular/core';
import { Account } from '../interfaces/account';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService implements OnDestroy {

  //Un account 
  protected newAccount!: Account ;
  public observableAccountOne : BehaviorSubject<Account>
   = new BehaviorSubject<Account>(this.newAccount); // le asigno un valor por defecto

  //Una lista de acocunt
  protected newAccounts : Account[] = [];
  public observableAccount : BehaviorSubject<Account[]>
   = new BehaviorSubject<Account[]>(this.newAccounts); // le asigno un valor por defecto


  constructor(private apiService : ApiService) { }
  
  ngOnDestroy():void{
    this.observableAccount.unsubscribe();
    this.observableAccountOne.unsubscribe();
  }


  updateAccountList = () =>{
    if(this.observableAccount.observed && !this.observableAccount.closed){
      this.apiService.getAllAccounts().subscribe({
        next: (typeApi) => { this.newAccounts = typeApi },
        complete: () => {this.observableAccount.next(this.newAccounts);}
      });
    }
  }

  updateOneAccount(id : string){
    if(this.observableAccountOne.observed && !this.observableAccountOne.closed){
      this.apiService.getAccount(id).subscribe(
        {
        next: (typeApi) => { this.newAccount = typeApi },
        complete: () => {this.observableAccountOne.next(this.newAccount);}
        });
    }
  }

  // updateOneCustomer(id : string){
  //   if(this.customerOneObservable.observed && !this.customerOneObservable.closed){
  //     this.apiService.getOneCustomer(id).subscribe(
  //       {
  //         next : (value) => (this.customer = value),
  //         complete: () => (this.customerOneObservable.next(this.customer))
  //       });
  //   }
    

  // }

  

}
