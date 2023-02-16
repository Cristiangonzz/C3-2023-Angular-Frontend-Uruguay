import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerByOneListComponent } from './customer-by-one-list/customer-by-one-list.component';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from '../components/home/home.component';
import { ComponentsModule } from "../components/components.module";




@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerByOneListComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
  ],
  exports : [
    CustomerListComponent,
    CustomerByOneListComponent,
    UpdateComponent,
   
    
  ]

})
export class CustomerModule { }
