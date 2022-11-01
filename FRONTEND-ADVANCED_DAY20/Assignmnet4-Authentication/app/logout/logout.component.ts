import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private activatedRouteObj:ActivatedRoute){ 
          sessionStorage.removeItem("AUTH_TOKEN");
          this.router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
