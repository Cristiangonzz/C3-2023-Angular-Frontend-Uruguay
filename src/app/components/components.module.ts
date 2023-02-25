import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FindAllComponent } from './find-all/find-all.component';
import { FindByOneIdComponent } from './buscador/find-by-one-id.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';




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
    MaterialModule,


    

  ],
  exports : [
    FindAllComponent,
    FindByOneIdComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
