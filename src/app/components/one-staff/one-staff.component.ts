import { Component, Input, OnInit } from '@angular/core';
import { staff } from 'src/app/interfaces/staff';
import { ActivatedRoute } from '@angular/router';
import { allStaff } from 'src/app/data/staff';


@Component({
  selector: 'app-one-staff',
  templateUrl: './one-staff.component.html',
  styleUrls: ['./one-staff.component.css']
})
export class OneStaffComponent implements OnInit {
  staff?:staff;
  constructor(private activatedRoute: ActivatedRoute) { 
  this.activatedRoute.params.subscribe(params => {
    console.log(params);
    const id = parseInt(params['id']);
    this.staff = allStaff.find(s=> s.code === id)
  })
}

  ngOnInit() {
  }

}
