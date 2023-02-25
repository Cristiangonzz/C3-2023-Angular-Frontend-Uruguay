import { Component, OnInit} from '@angular/core';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { Customer } from '../../customer/interface/customer';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  providers:[CustomerService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor(
    private customerService : CustomerService,
    private router : Router,){
    }

  salir = false;
  customer!:Customer;
  editado!: string;

  email!:string ;

  ngOnInit():void{

   this.customerService.UpDateSubjectEmail();
   this.customerService.customerLogeadoObservable.subscribe(
    (customer : Customer) => (this.customer = customer)
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
