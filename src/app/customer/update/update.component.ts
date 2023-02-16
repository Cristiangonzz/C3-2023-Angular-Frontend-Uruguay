import { Component, Host, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { SignUpModel } from 'src/app/login/interfaces/signUpModel';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../interface/customer';
import { upDateCustomerModel } from '../interface/upDateCustomer';
import { ApiService } from '../../api/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-update',
  providers: [CustomerService],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{

  //Variables
  customerId: string = "";
  
  editado = false;

  customer!: Customer;
  customerEditado!:Customer;


  public FormUpDate!: FormGroup;

  constructor(
    public customerService: CustomerService,
    private formBuilder : FormBuilder,
    public  readonly activatedRoute: ActivatedRoute,
    private api : ApiService,
    private router : Router){}

  ngOnInit(): void {

    this.paramsCustomerId();//me guarda el parametro en => customerId

    this.FormUpDate = this.initForm();
    this.getCustomerId();
  }
  

  getCustomerId(){
    //actualizo el customer pasando el identificaado del customer
    this.api.getOneCustomer(this.customerId).subscribe(
      (data:Customer)=>{
        this.customer = data;
        console.log(this.customer);
      this.upDateFromApi();}
    );
    
  }
  
  initForm():FormGroup{
    return this.formBuilder.group(
      {
        documentType:['',[Validators.required]],
        document:['',[Validators.required]],
        fullName:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]]
      })
  }
    
  upDateFromApi():void{
    const response = {
      documentType: this.customer.documentType.id,
      document:this.customer.document,
      fullName:this.customer.fullName,
      email:this.customer.email,
      phone:parseInt(this.customer.phone),
      password:this.customer.password
    }
    this.FormUpDate.patchValue(response);
  }


  send():void{
    
    this.api.upDateCustomer(this.customerId,this.FormUpDate.getRawValue()).subscribe(
      (data:Customer)=>(this.customerEditado = data)
    ); 
    this.editado = true;
    //this.router.navigate(['home']);
  }

  paramsCustomerId():void{ 
    this.activatedRoute.params.subscribe(
      (params : Params) => {
        this.customerId = params['id']
      });
  }

}
