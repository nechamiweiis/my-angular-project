import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/interfaces/student';
import { students } from '../../data/students';
import { StudentsService } from 'src/app/services/students.service'

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
   styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  newStudent?: student;

  initStudent() {
    this.newStudent = {
      code: 0,
      name: '',
      address: ''
    };
  }

  // ייבוא של ספריה לתוך קומפוננטה ע"י שימוש ב dependency injection
  constructor(private router: Router,private studentService: StudentsService) {
    this.initStudent();
   }

  ngOnInit(): void {}

  addStudent(e:SubmitEvent): void {
    e.preventDefault();
    this.newStudent && (this.newStudent.code = students.length);
    this.studentService.addStudent(this.newStudent as student)
    this.initStudent();
    // ניווט דרך הקוד
    this.router.navigateByUrl('/students');
  }

}
