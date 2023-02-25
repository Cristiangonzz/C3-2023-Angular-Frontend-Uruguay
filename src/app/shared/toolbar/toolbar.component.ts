import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "src/app/login/services/auth.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  implements OnDestroy {

  isAdmin: boolean = false;

  constructor(private auth: AuthService,
    private router : Router){
      this.isAdmin = this.auth.hasUser();
    }


  ngOnDestroy(): void {
    
  }
    
    
   
  btnPrincipal(){
    if(this.auth.hasUser()){
      this.router.navigate(['singin']);
    }
    this.router.navigate(['home'])

  }


}
