import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './login/singup/singup.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { FindAllComponent } from './components/find-all/find-all.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AdminGuard } from './guards/admin.guard';
import { SinginComponent } from './login/singin/singin.component';
import { CreateAccountTypeComponent } from './account/create-account-type/create-account-type.component';
import { CreateTransferComponent } from './transfer/create-transfer/create-transfer.component';
import { DepositListComponent } from './deposit/deposit-list/deposit-list.component';
import { TransferListComponent } from './transfer/transfer-list/transfer-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerByOneListComponent } from './customer/customer-by-one-list/customer-by-one-list.component';
import { FindByOneIdComponent } from './components/buscador/find-by-one-id.component';
import { UpdateComponent } from './customer/update/update.component';
import { UpDateComponent } from './account/up-date/up-date.component';
import { AccountByOneComponent } from './account/account-by-one/account-by-one.component';
import { HomeComponent } from './components/home/home.component';
import { PermisoGuard } from './guards/permiso.guard';

const routes: Routes = [
  
  //Rutas de segurity 
  {path:``,redirectTo:`/singin`,pathMatch: 'full'},
  {path:`singin`,component: SinginComponent},
  {path:`signUp`,component: SingupComponent,pathMatch: 'full'},
  {path:`signOut`,component: SingupComponent,pathMatch: 'full',},
  {path:`home`,component: HomeComponent,pathMatch: 'full',canActivate:[PermisoGuard]},
  
  //buscador
  {path:`search`,component :FindByOneIdComponent,pathMatch: 'full'/*,canActivate:[AdminGuard]*/},
  
  //Rutas de Customer
  {path:`customerList`,component :CustomerListComponent,pathMatch: 'full'/*,canActivate:[AdminGuard]*/},
  {path:`customerByOneList/:id`,component :CustomerByOneListComponent,pathMatch: 'full'/*,canActivate:[AdminGuard]*/},
  {path:`customer/documentType/create`,component:FindAllComponent,pathMatch: 'full'/*,canActivate:[AdminGuard]*/ },
  {path:`customerEdit/:id`,component :UpdateComponent,pathMatch: 'full'/*,canActivate:[AdminGuard]*/},
  
   //Rutas de Account
   {path:`account`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/create`,component: CreateAccountComponent,pathMatch: 'full'/*,canActivate:[AdminGuard] */},
   {path:`account/find-all`,component: AccountListComponent,pathMatch: 'full'},
   {path:`accountEdit/:id`,component:UpDateComponent,pathMatch: 'full'},
   {path:`account/account-type/create`,component: CreateAccountTypeComponent,pathMatch: 'full'/*,canActivate:[AdminGuard] */},
   {path:`account/customer/:customerId`,component: AccountByOneComponent,pathMatch: 'full'},
   //{path:`account/customer/:accountId`, component: FindAllComponent,pathMatch: 'full'},
   {path:`account/account-type/find-all`,component: FindAllComponent,pathMatch: 'full'},
 
 
   {path:`account/update/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/softDelete/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/hardDelete/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/changeAccountType/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/getAccountType/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/getAccount/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/modificarState/:id/:state`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/verifyAmount/:id/:amount`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/remove-all-balance/:accountId`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/delete-balance/:id/:amoun`,
     component: FindAllComponent,pathMatch: 'full'},
   {path:`account/addBalance/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/state/:id`,component: FindAllComponent,pathMatch: 'full'},
   {path:`account/Balance/:id`,component: FindAllComponent,pathMatch: 'full'},
   //Rutas de Transfer
   {path:`transfer`,component: CreateTransferComponent,pathMatch: 'full'},
   {path:`transfer/list`,component: TransferListComponent,pathMatch: 'full'},
   //Rutas de Deposit 
   {path:`deposit`,component: DepositListComponent,pathMatch: 'full'},
   {path:`deposit/list`,component: DepositListComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
