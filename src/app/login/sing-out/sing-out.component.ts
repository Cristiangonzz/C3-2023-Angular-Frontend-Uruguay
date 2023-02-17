import { Component, Input } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.scss']
})
export class SingOutComponent {

  constructor(private api : ApiService){}


  @Input() out : boolean = false;
  
  signOut(){
    
    const token = localStorage.getItem('token');
    if(token){
      this.api.sigOut(token);
      localStorage.removeItem('token');
    }
    this.out = true;
  }
}
