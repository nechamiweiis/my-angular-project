import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneStaffComponent } from '../app/components/one-staff/one-staff.component';
import { HomeComponent } from '../app/components/home/home.component';
import { StaffComponent } from '../app/components/staff/staff.component';
import { StudentComponent } from '../app/components/student/student.component';
import { StudentsComponent } from '../app/components/students/students.component';
import { NewStudentComponent }from '../app/components/new-student/new-student.component'
import { UpdateStaffDetailsComponent }from '../app/components/update-staff-details/update-staff-details.component'


const routes: Routes = [ {
  path: '',  
  component: HomeComponent,
  children: [ {
    path: 'staff',
    component: StaffComponent,
    children: [{
      path: ':id',
      component: OneStaffComponent,
      children:[{
        path: ':id',
        component: UpdateStaffDetailsComponent,
      }]
    }]
  }, {
    path: 'students',
    component: StudentsComponent,
    children: [{
      path: 'new',
      component: NewStudentComponent,
    },{
      path: ':id',
      component: StudentComponent,
    }]
  }]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
