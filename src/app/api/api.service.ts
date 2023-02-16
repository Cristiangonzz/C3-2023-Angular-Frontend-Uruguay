import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../account/interfaces/account';
import { Customer } from '../customer/interface/customer';
import { Injectable } from '@angular/core';
import { SignUpModel } from '../login/interfaces/signUpModel';
import { SignIn, UserResponse } from '../login/interfaces/signInModel';
import { CookieService } from 'ngx-cookie-service';
import { upDateCustomerModel } from '../customer/interface/upDateCustomer';
import { DocumentType } from '../customer/interface/documentType';
import { CreateDeposit } from '../deposit/interface/deposit';
import { DepositModel } from '../deposit/interface/depositModel';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient,
    private cookies : CookieService) { }

  httpOptions = {
    headers : new HttpHeaders({
      //'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  token! : string;
 //--------------Segurity----------------------------
  logIn(user : SignIn):Observable<string>{
    return this.http.post(`${this.BASE_URL}/security/singIn`,user,{responseType: 'text'});  
  }
  
  //Me tendria que retornar el token 
  sigUp(newCustomer: SignUpModel):Observable<string>{ // pasarle el string del documentType.id porque en el backend verifica si es strign
    return this.http.post(`${this.BASE_URL}/security/singUp`, newCustomer, {responseType: 'text'} );
  }

  sigOut(token:string){
    this.http.post(`${this.BASE_URL}/security/singOut/${token}`,this.httpOptions);
  }
  
  // logOut():void{}
  // private readToken():void{ //Guardar el token en el local storage

  // }
  // private saveToken():void{ // para guardar el token

  // }
  // private handlerError(err:any):Observable<never>{
  //   let errorMensaje = `A ocurrido un Error`;
  //   if(err){
  //     errorMensaje = `Error : code ${err.message}`
  //   } 
  //   window.alert(errorMensaje);
  //   return throwError(errorMensaje);
  // }
  
  //--------------Account----------------------------
  //createAccount(){}
  //createAccountType(){}
  //updateAccount(){}
  //deleteAccount(){}
  //getAccountType(){}
  //getBalanceAccount(){}
  getAccount(id : string):Observable<Account>{
    return this.http.get<Account>(`${this.BASE_URL}/account/getAccount/${id}`,this.httpOptions);
  }
  //getStateAccount(){}
  //addBalanceAccount(){}
  //changeAccountType(){}
  //removeBalanceAll(){}
  //changeStateAccount(){}
  //removeBalance(){}
  
  getAllAccounts():Observable<Account[]>{
    return this.http.get<Account[]>
    (`${this.BASE_URL}/account/find-all`,this.httpOptions)
  }

  getOneAccount(id : string):Observable<Account>{
    return this.http.get<Account>(`${this.BASE_URL}/account/customer/${id}`,this.httpOptions);
  }


  //--------------Customer----------------------------------------
  
  //Trae todo los customer
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>
    (`${this.BASE_URL}/customer/all`,this.httpOptions)
  }

  //Busca un customer por id
  getOneCustomer(id : string):Observable<Customer>{
    return this.http.get<Customer>(`${this.BASE_URL}/customer/getInfo/${id}`,this.httpOptions);
  }
  

  getDocumentType(document : string):Observable<DocumentType>{
    return this.http.get<DocumentType>(`${this.BASE_URL}/customer/document-type/find-id/${document}`,this.httpOptions);
  }
  
  getEmailCustomer(email: string):Observable<Customer>{
    return this.http.get<Customer>(`${this.BASE_URL}/customer/credecialesEmail/${email}`,this.httpOptions);
    
  }
  //Acutalizar customer
  upDateCustomer(idCustomer : string,customer : upDateCustomerModel):Observable<Customer>{
    return this.http.put<Customer>(`${this.BASE_URL}/customer/update/${idCustomer}`,customer,this.httpOptions);
  }
  
  
  //--------------Deposit----------------------------
  createDeposti(account: CreateDeposit):Observable<DepositModel>{
    return this.http.post<DepositModel>(`${this.BASE_URL}/deposit/create`,account,this.httpOptions);
  }

  getDeposit():Observable<DepositModel[]>{
    return this.http.get<DepositModel[]>(`${this.BASE_URL}/find-all`,this.httpOptions);

  }

  //--------------Transfer----------------------------
  //getTransfer(){}
  //getBalance
  
  //get account type
  
  
  //create Account 
  //Create account type 
  
  
  
  


}
