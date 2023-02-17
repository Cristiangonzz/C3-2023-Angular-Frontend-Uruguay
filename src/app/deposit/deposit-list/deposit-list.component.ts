import { Component, Host, OnInit } from '@angular/core';
import { DepositService } from "../service/deposit.service";
import { DepositModel } from '../interface/depositModel';


@Component({
  selector: 'app-deposit-list',
  providers: [DepositService],
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.scss']
})
export class DepositListComponent implements OnInit{
  depositosAll: DepositModel []= [] ;

  constructor(@Host() public serviceDeposit : DepositService){}
  
  
  ngOnInit(): void {
   this.actualizarDepositos();
  }

  actualizarDepositos():void{

    this.serviceDeposit.DepositAllObservable.subscribe(
      (data:DepositModel[]) => {

      if(this.depositosAll.length != data.length){
        
        this.depositosAll = data
      }
      });
      this.serviceDeposit.getDepositAll();
  }



}
