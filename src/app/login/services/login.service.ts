import { Injectable } from '@angular/core';
import { enviroment } from "../../../enviroment/enviroment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { SignIn, UserResponse } from '../interfaces/signInModel';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers : new HttpHeaders({
      //'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET',
      'Access-Control-Allow-Origin': '*'
    })
  }
  

  constructor(private http : HttpClient) { }

  logIn(UserData : SignIn):Observable<UserResponse | void>{
    return this.http.post<UserResponse>(`${enviroment.API_URL}/security/singIn`,UserData,this.httpOptions)
    .pipe(map((res: UserResponse) => {
      console.log(`Res =>`,res)
      //saveToke()
    }),
    catchError((err) => this.handlerError(err))
    );
  }
  
  logOut():void{}
  private readToken():void{ //Guardar el token en el local storage

  }
  private saveToken():void{ // para guardar el token

  }
  private handlerError(err:any):Observable<never>{
    let errorMensaje = `A ocurrido un Error`;
    if(err){
      errorMensaje = `Error : code ${err.message}`
    } 
    window.alert(errorMensaje);
    return throwError(errorMensaje);
  }


}