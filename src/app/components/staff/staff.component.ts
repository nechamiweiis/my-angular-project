import { Component, OnInit } from '@angular/core';
import { OneStaffComponent } from '../one-staff/one-staff.component';
import { allStaff } from 'src/app/data/staff';
import { staff } from 'src/app/interfaces/staff';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: staff[] = allStaff;
  constructor() { }

  ngOnInit() {
  }

}
