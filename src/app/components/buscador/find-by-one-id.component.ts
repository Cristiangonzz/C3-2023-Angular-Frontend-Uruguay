import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-by-one-id',
  templateUrl: './find-by-one-id.component.html',
  styleUrls: ['./find-by-one-id.component.scss']
})
export class FindByOneIdComponent implements OnInit{

  //Estas varaibles son para mostrar simplemente pero no se usan en la logica 
  types: string[] = ['Customer', 'Account'];

  public typeForm!: FormGroup;
  public formCustomer!: FormGroup;

  constructor(
    private readonly router : Router,
    private formBuilder : FormBuilder){}

    ngOnInit(): void {
      this.formCustomer = this.initForm();
      this.typeForm = this.initFormOption();  
    }


    initForm():FormGroup{
      return this.formBuilder.group(
        {
          searchId:['',[Validators.required]],
        })
    }
  
    initFormOption():FormGroup{
      return this.formBuilder.group(
        {
          type:[''],
        })
    }

  //Quiero hace una especia se switch para filtrar si es customer ,account o cualquier otra opcion y mandar a la ruta segun las condiciones
  searchCustomerId(){
    
    if(this.typeForm.get('type')?.value == 'Customer'){
      this.router.navigate([`customerByOneList/${this.formCustomer.get('searchId')?.value}`]);
    }

    if(this.typeForm.get('type')?.value == 'Account'){
      //Pasarle el id del customer para que te retorne la cuenta 
      this.router.navigate([`account/customer/${this.formCustomer.get('searchId')?.value}`]);
    }
    
    
  }
}
