import { Injectable, OnDestroy } from '@angular/core';
import { TransferModel } from '../interface/transferModel';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { CreateTransferModel } from '../interface/createTransferModel';

@Injectable({
  providedIn: 'root'
})
export class TransferService implements OnDestroy{

  constructor(private api : ApiService) { }


  
  //Todos los deposito
  protected tansferAll: TransferModel[] = [];
  public transferAllObservable : BehaviorSubject<TransferModel[]> = 
  new BehaviorSubject<TransferModel[]>(this.tansferAll);

  //Una transferencia 
  protected tansfer!: TransferModel;
  public transferObservable : BehaviorSubject<TransferModel> = 
  new BehaviorSubject<TransferModel>(this.tansfer);





  ngOnDestroy(): void {
    this.transferAllObservable.unsubscribe();
    this.transferObservable.unsubscribe();
  }

  createTransfer(transfer : CreateTransferModel){
    if(this.transferObservable.observed && !this.transferObservable.closed){
      this.api.createTransfers(transfer).subscribe({
        next: (data : TransferModel)=>(this.tansfer = data),
        complete: ()=> (this.transferObservable.next(this.tansfer))
      })
    }
  }

  getAllTransfer = () => {
    if(this.transferAllObservable.observed && !this.transferAllObservable.closed){
      this.api.getTransferAll().subscribe({
        next: (data:TransferModel[])=>(this.tansferAll = data),
        complete: () => {
          this.transferAllObservable.next(this.tansferAll);
          asyncScheduler.schedule(this.getAllTransfer, 1000);
        }
      });
    }else{
      asyncScheduler.schedule(this.getAllTransfer, 100);
    }
  }

}
