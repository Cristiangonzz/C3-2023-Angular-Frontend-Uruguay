import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FindAllComponent } from './find-all/find-all.component';
import { FindByOneIdComponent } from './buscador/find-by-one-id.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LoginModule } from '../login/login-module.module';



@NgModule({
  declarations: [
    FindAllComponent,
    FindByOneIdComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    
    

  ],
  exports : [
    FindAllComponent,
    FindByOneIdComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
