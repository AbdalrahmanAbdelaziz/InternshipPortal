import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  constructor(private router: Router){}

  navigateToLogin() {
    this.router.navigate(['/select-role']);
  }

  navigateToRegister() {
    this.router.navigate(['/register-role']);
  }

  ngOnInit(): void {
      
  }

}
