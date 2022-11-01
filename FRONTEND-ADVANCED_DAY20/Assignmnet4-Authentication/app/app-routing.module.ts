import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthguardService } from './authguard.service';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path :  "", component : HomeComponent },
  { path :  "Emps", component : EmpsComponent, canActivate : [AuthguardService] },
  { path :  "Depts", component : DeptsComponent , canActivate : [AuthguardService] },
  { path :  "Aboutus", component : AboutusComponent },
  { path :  "Login", component : LoginComponent },
  { path :  "Logout", component : LogoutComponent },
  { path :  "Details/:id", component : DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
