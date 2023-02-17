import { Component, Host, OnInit } from '@angular/core';
import { TransferModel } from '../interface/transferModel';
import { TransferService } from "../service/transfer.service";
import { ApiService } from 'src/app/api/api.service';


@Component({
  selector: 'app-transfer-list',
  providers: [TransferService],
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent implements OnInit{


  
  constructor(@Host() public servieTransfer : TransferService,
  private api : ApiService){}
  
  transferList: TransferModel[] = [];
  
  ngOnInit(): void {
   this.actualizarTransferencias();
  }

  actualizarTransferencias():void{

    this.servieTransfer.getAllTransfer();
    
    this.servieTransfer.transferAllObservable.subscribe(
      (data : TransferModel[]) =>{
        if(this.transferList.length != data.length){
          this.transferList = data;
          console.log(data);
        }
      }
    )
    
  }



}
