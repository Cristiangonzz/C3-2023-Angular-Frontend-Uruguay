import { Component, OnInit,Input } from '@angular/core';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { Customer } from '../../customer/interface/customer';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-home',
  providers:[CustomerService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(public customerService : CustomerService,
    private api : ApiService,
    private router : Router,
    private auth : AuthService){}

  salir = false;
  customer!:Customer;
  editado!: string;

  ngOnInit():void{
    this.api.getEmailCustomer(this.auth.getUserLocalStorage().username).subscribe(
      (data) => {
        console.log(data);
        this.customer = data;
      }
    );
  }

  Edit(){
    this.router.navigate([`customerEdit/${this.customer.id}`]);
  }
   
  deleteCustmer(){}

  signOut(){

    localStorage.removeItem("token");
    this.router.navigate(['singin']);
  }
 


  

}
