import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { MaterialModule } from './material/material.module';
import { EjercicioComponent } from './program-Funcional/ejercicio/ejercicio.component';
import { AccountModule } from './account/account.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from './customer/customer.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { CookieService } from 'ngx-cookie-service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    AccountModule,
    CustomerModule,
    ComponentsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
