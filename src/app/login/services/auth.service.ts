import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, provideAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { ApiService } from '../../api/api.service';
import {  DocumentTypeModel } from '../../program-Funcional/interfaces/customerModel';
import { SignUpModel } from "../interfaces/signUpModel";
import { SignIn } from '../interfaces/signInModel';
import { tokenCustomer, tokenUser } from '../interfaces/tokenModel';


@Injectable({
  providedIn: 'root',
})
export class AuthService  {


  protected documentType: DocumentTypeModel = {
    name: "",
  };
  
  protected newCustomer: SignUpModel = {
    documentTypeId: "",//DocumentTypeModel , es un tipo de dato que nosotros creamos
    accountTypeId: "",//Tengo un account type para crear al usuario siendo que en el backend no lo tengo
    document: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  };

   constructor(
    private apiService : ApiService,
    private router : Router,
    private Auth : Auth,) { }


    
registerFire(user : SignIn){ //esto es para registrarse pero tengo que pasarle los demas valores
  return createUserWithEmailAndPassword(this.Auth,user.username,user.password);
}

loginFire(user: SignIn){
  return signInWithEmailAndPassword(this.Auth,user.username,user.password);
}
singOut(){
  return signOut(this.Auth);
}

loginGoogle(){
  return signInWithPopup(this.Auth, new GoogleAuthProvider());
  
}


 
  helper = new JwtHelperService();

  user ! : SignIn;
  private token!: string;
  customerSignUp! : SignUpModel;
  
  public signUpObservable: BehaviorSubject<SignUpModel> = 
  new BehaviorSubject<SignUpModel>(this.newCustomer);
  
    //Esta funcion se esta repitiendo dos veces
    newSigIn(user : SignIn){
      this.apiService.logIn(user).subscribe(
        (data) => {
          localStorage.setItem('token',data);
        }
        );
    }

    newSigUp(newCustomer : SignUpModel){
      this.apiService.sigUp(newCustomer).subscribe(
        (data) => localStorage.setItem('token',data));
    }


    hasUser():boolean{
      if(typeof localStorage.getItem('token') === 'string'){
        return true;
      }
      return false;
    }

    getUserLocalStorage(){
      const token = localStorage.getItem('token'); 
      if(token){
        return this.helper.decodeToken(token);
      }       
    }

      
    getCustomerLocalStorage(): tokenCustomer | undefined {
      const token = localStorage.getItem('token');
      const tokenUser = token ? this.helper.decodeToken(token) : undefined;
      return tokenUser;   
    }
      
    signOut () {
    localStorage.removeItem('token');
    this.router.navigate(['/singin']);
    }




  }




  



