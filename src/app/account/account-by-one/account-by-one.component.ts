import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Account } from '../interfaces/account';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-account-by-one',
  providers: [AccountService],
  templateUrl: './account-by-one.component.html',
  styleUrls: ['./account-by-one.component.scss']
})
export class AccountByOneComponent implements OnInit {
  
  accountId!: string ; 
  protected account! : Account;

  constructor(
    public  accountservice : AccountService,
    private readonly route : ActivatedRoute,
    private router :Router,
    private api : ApiService){

      
    }

  ngOnInit(): void {
    this.paramsId();
    console.log(this.accountId)
    //this.getAccount();
    
    this.api.getAccount("1").subscribe(
      (data) => (this.account =data)
    )
    
  }


  // Capturo el parametro que se pasa por la rota
  paramsId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.accountId = params['accountId']
      });
  }

//Despues de que tengo el customer enotonces se lo igualo a mi varaible 
  getAccount(){
    this.accountservice.updateOneAccount("1");
    this.accountservice.observableAccountOne.subscribe(
      (data : Account) => (this.account = data)
    );
  }
  
  //Redirecciono a este componente si apreta click en editar
  editar(id : string){
    //Cambiar para la ruta de account edit
    this.router.navigate([`customerEdit/${id}`]);
  }


}
