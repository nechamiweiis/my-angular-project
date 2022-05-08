import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/data/students';
import { student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: student[] = students;
  constructor() { }

  ngOnInit() {
  }

}
