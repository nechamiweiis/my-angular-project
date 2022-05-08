import { Injectable } from '@angular/core';
import { student } from '../interfaces/student';
import { students } from '../data/students';
import { staff } from '../interfaces/staff';
import { allStaff } from '../data/staff';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students?: student[] = students; 
  staff?: staff[] = allStaff;

  addStudent(student: student) {
    this.students?.push(student);
  }
  updateStaffDetails(staffSrc: staff,staffNew: staff)
  {let e=this.staff?.find(e=>e === staffSrc);

    if(e!=undefined){
    e.address=staffNew.address;
    e.name=staffNew.name
    this.staff?.map(e=> e);
}

 
  }
  constructor() { }
}
