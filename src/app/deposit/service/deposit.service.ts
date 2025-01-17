import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { Account } from '../../account/interfaces/account';
import { CreateDeposit } from '../interface/deposit';
import { DepositModel } from '../interface/depositModel';

@Injectable({
  providedIn: 'root'
})
export class DepositService implements OnDestroy {

  constructor(private api : ApiService) { }

  //Deposito Creado
  protected Deposit: DepositModel = 
  {
    
      id : "",
      account:
      {
  
        id : "",
        coustomer_id :
        {
          id: "",
          documentType: {
            id: "",
            name: "",
            state: true,

          },//DocumentTypeModel , es un tipo de dato que nosotros creamos
          document: "",
          fullName:"",
          email: "",
          phone: "",
          password: "",
          avatarUrl:  undefined,
          state: true,
          daletedAt:undefined,
        },
        
        account_type_id:
         {
          id : "",
          name: "",
          state : true,
        
         },
        balance: 0,
        state: true,
        delete_at: undefined,
  
      } ,//DocumentTypeModel , es un tipo de dato que nosotros creamos
      amount: 0,
      date_time:0,
      delete_at: 0,
    };
  

  public createDepositObservable : BehaviorSubject<DepositModel> = 
  new BehaviorSubject<DepositModel>(this.Deposit);

  //Todos los deposito
  protected DepositAll: DepositModel[] = [];
  public DepositAllObservable : BehaviorSubject<DepositModel[]> = 
  new BehaviorSubject<DepositModel[]>(this.DepositAll);

  //repito codigo para evitar errores con los modelos signUp y customer
  protected Account!: Account;
  public AccountObservable : BehaviorSubject<Account> = 
  new BehaviorSubject<Account>(this.Account);


//--------------------------------------------------------------------------------------------------  
 

ngOnDestroy(): void {
    this.AccountObservable.unsubscribe();
    this.DepositAllObservable.unsubscribe();
    this.createDepositObservable.unsubscribe();
  }

  //Emitimos el deposito creado
  createDeposit(deposit:CreateDeposit){
    if(this.createDepositObservable.observed && !this.createDepositObservable.closed){
      this.api.createDeposti(deposit).subscribe(
        {
          next: (data:DepositModel)=>(this.Deposit = data),
          complete: ()=>(this.createDepositObservable.next(this.Deposit))
        }
      )
    }
  }

  //Emitimos todos los depositos
  getDepositAll= () => {
    if(this.DepositAllObservable.observed && !this.DepositAllObservable.closed){
      this.api.getAllDeposit().subscribe(
        {
          next: (data:DepositModel[])=>(this.DepositAll = data),
          complete: ()=>{
            this.DepositAllObservable.next(this.DepositAll);
            asyncScheduler.schedule(this.getDepositAll, 1000);
          }});
    }else{
      asyncScheduler.schedule(this.getDepositAll, 100);
    }
  }

  //Emitimos un deposito buscado
  getAccount(accountId : string){
    if(this.AccountObservable.observed && !this.AccountObservable.closed){
      this.api.getAccount(accountId).subscribe(
        {
          next: (data:Account)=>(this.Account = data),
          complete: ()=>(this.AccountObservable.next(this.Account))

        }
      )
    }
  }
  

}
