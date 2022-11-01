import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeptsComponent } from './depts/depts.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DemoComponent } from './demo/demo.component';
import { GenderPipe } from './gender.pipe';
import { RangePipe } from './range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeptsComponent,
    CoursesComponent,
    StudentListComponent,
    DemoComponent,
    GenderPipe,
    RangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
