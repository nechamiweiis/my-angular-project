import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allStaff } from 'src/app/data/staff';
import { staff } from 'src/app/interfaces/staff';
import { StudentsService } from 'src/app/services/students.service'

@Component({
  selector: 'app-update-staff-details',
  templateUrl: './update-staff-details.component.html',
  styleUrls: ['./update-staff-details.component.css']
})
export class UpdateStaffDetailsComponent implements OnInit {

  sourceStaff?: staff;
  updatedStaff?: staff;
  initStaff() {
    this.updatedStaff = {
      code: 0,
      name: '',
      address: ''
    };
  }

  updateDetails(e:Event): void {
    e.preventDefault();
    this.updatedStaff && (this.updatedStaff.code = allStaff.length);
    this.studentService.updateStaffDetails(this.sourceStaff as staff,this.updatedStaff as staff)
    this.initStaff();
    // ניווט דרך הקוד
    this.router.navigateByUrl('/staff');
  }

  constructor(private router: Router,private studentService: StudentsService,private activatedRoute: ActivatedRoute) { 
    this.initStaff();
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const id = parseInt(params['id']);
      this.sourceStaff = allStaff.find(s=> s.code === id)
    })}
  ngOnInit(): void {
  }
}


