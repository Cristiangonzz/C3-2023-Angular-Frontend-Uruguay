import { Injectable, OnDestroy } from '@angular/core';
import { TransferModel } from '../interface/transferModel';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../../api/api.service';

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
    throw new Error('Method not implemented.');
  }
}
