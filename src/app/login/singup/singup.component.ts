import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from '../interfaces/signUpModel';

import { CustomerService } from '../../customer/service/customer.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SignIn } from '../interfaces/signInModel';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{
  
  

  public FormSignUp!: FormGroup; 
  
  customer : SignUpModel = {  
    documentTypeId: "",
    accountTypeId:"",
    document: "",
    fullName: " ",
    email: "",
    phone: "",
    password: "",
    
  }
  customerRegistrado : SignUpModel | undefined = {  
    documentTypeId: "",
    accountTypeId: "",
    document: "",
    fullName: " ",
    email: "",
    phone: "",
    password: "",
    
  }
  
  constructor(
    private formBuilder : FormBuilder,
    private serviceCustomer : CustomerService,
    private router : Router,
    private authService : AuthService){}

  

  ngOnInit(): void {
    this.FormSignUp = this.initForm();
  }

  send():void{
    this.customer = this.FormSignUp.getRawValue();

    this.authService.newSigUp(this.customer);

    this.manipulaciondeToken();
    
    
    const signInFire : SignIn = {
      username : this.customer.email,
      password : this.customer.password,
    }
    this.authService.registerFire(signInFire);


    this.router.navigate(['/singin']);
  }

  manipulaciondeToken(){
    // if(!this.authService.hasUser()) throw new Error('No hay token (signUp component )');
    this.customerRegistrado = this.authService.getCustomerLocalStorage();
    localStorage.removeItem('token');
    console.log(this.customerRegistrado);
  }

  initForm():FormGroup{
    return this.formBuilder.group(
      {
        documentTypeId:['',[Validators.required]],
        accountTypeId:['',[Validators.required]],
        document:['',[Validators.required]],
        fullName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]],
      })
  }


}
