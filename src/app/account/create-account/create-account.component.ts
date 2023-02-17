import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-create-account',
  providers: [AccountService],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public fromAccount!: FormGroup;

  constructor( private formBuilder : FormBuilder,
    private router : Router,
    private api: ApiService){}
  
  
  ngOnInit(): void {
    this.fromAccount = this.initForm();
  }

  createAccount(){
    this.api.createAccount(this.fromAccount.getRawValue()).subscribe(
      (data)=>(console.log(data))
    );
    this.router.navigate(['home']);
  }
  initForm():FormGroup{
    return this.formBuilder.group(
      {
        accountTypeId:['',[Validators.required]],
        customer:['',[Validators.required]],
      })
  }

}
