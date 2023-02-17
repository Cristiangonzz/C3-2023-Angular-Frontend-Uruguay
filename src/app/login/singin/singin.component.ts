import { Component, OnInit } from '@angular/core';
import { SignIn } from '../interfaces/signInModel';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tokenUser } from '../interfaces/tokenModel';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { Customer } from 'src/app/customer/interface/customer';
import { ApiService } from '../../api/api.service';



@Component({
  selector: 'app-singin',
  providers:[AuthService,CustomerService],
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  
  //token ! : string;
  customerLogeado!:Customer;
  logeado:boolean = false;
  userSignIn!: SignIn ;
  username!:string | null;
  tokenUser : tokenUser | undefined= {
    username : "",
    password: "",
    iat:""
  } ;
  public formLogin!: FormGroup ; 

  constructor(private authService : AuthService,
    private formBuilder : FormBuilder,
    private router : Router,
    private customerService : CustomerService,
    private api : ApiService ){}
  
  
  ngOnInit(): void {
    this.formLogin = this.initFormLogin();
  }

  
  initFormLogin():FormGroup{
     return this.formBuilder.group(
      {
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    });

  }

  signIn(){ // Tiene un error que al principio no me lee el token 
     this.userSignIn = this.formLogin.getRawValue();
    
     
     //verifica si exite en firebase
     this.authService.loginFire(this.userSignIn)
     .then( data => {
       console.log(data)
      })
      .catch(err => (console.log(err))); 
      
      //busca en el backend el correo y pass
      this.authService.newSigIn(this.userSignIn);
      
    
      this.tokenUser = this.authService.getUserLocalStorage();
      console.log(this.tokenUser);
      
      //si es valida la cuenta entonces busco en mi backend el customer
      this.actualizarCustomerEmail(this.formLogin.get("username")?.value);
      this.router.navigate(['/home']);
  }

  google(){
    return this.authService.loginGoogle()
    .then(data => 
      {
        // this.router.navigate(["/home"]) ;
        if(data.user.email){
      console.log('Correo de google =>',data.user.email,data);
      
        this.api.getEmailCustomer( data.user.email).subscribe(
          (data)=>{
            this.userSignIn.username = data.email ;
            this.userSignIn.password = data.password ;

            //busca en el backend el correo y pass
          this.authService.newSigIn(this.userSignIn);
          
          this.tokenUser = this.authService.getUserLocalStorage();
          console.log(this.tokenUser);
            this.router.navigate(['/home']);
          }
          )
          
        }
    })
    .catch(err => console.log(err));
    
  }


  //Ahora este id es el que tengo enviar al servicio para traer el customer 
  actualizarCustomerEmail(email : string):void{
    this.customerService.getEmail(email);
    this.customerService.customerLogeadoObservable.subscribe(
      (data : Customer) => { this.customerLogeado = data;
      console.log(this.customerLogeado)}
    )
    this.customerService.getEmail(this.formLogin.get('username')?.value);
  }

  

  
  
  
}
