import { Component, OnInit,Input } from '@angular/core';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { Customer } from '../../customer/interface/customer';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  providers:[CustomerService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private customerService : CustomerService,
    private api : ApiService,
    private router : Router){}

  salir = false;
  @Input() customer!:Customer;
  editado!: string;

  ngOnInit():void{
  }

  Edit(){
    this.router.navigate([`customerEdit/${this.customer.id}`]);
  }
   
  deleteCustmer(){}

  signOut(){

    sessionStorage.removeItem("token");
    this.salir = true;
  }
 

  

}
