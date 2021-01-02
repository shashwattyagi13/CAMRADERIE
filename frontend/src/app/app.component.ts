import { TokenStorageService } from './services/token-storage.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'frontend';
  loggedUser: boolean = false;

  constructor(private token: TokenStorageService, public router: Router) {
    
  }
  ngAfterViewChecked(): void {
    if(this.token.getUser() !== null) {
      this.loggedUser = true;
    }
  }

  ngOnInit(): void {
    if(this.token.getUser() !== null) {
      this.loggedUser = true;
    }
  }

  logout() {
    this.token.signOut();
    this.loggedUser = false;
    this.router.navigate(['/home']);
  }
}
