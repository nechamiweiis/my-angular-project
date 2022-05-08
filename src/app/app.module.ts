import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OneStaffComponent } from '../app/components/one-staff/one-staff.component';
import { HomeComponent } from '../app/components/home/home.component';
import { StaffComponent } from '../app/components/staff/staff.component';
import { StudentComponent } from '../app/components/student/student.component';
import { StudentsComponent } from '../app/components/students/students.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { UpdateStaffDetailsComponent } from './components/update-staff-details/update-staff-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OneStaffComponent,
    StaffComponent,
    StudentComponent,
    HomeComponent,
    StudentsComponent,
    NewStudentComponent,
    UpdateStaffDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

