import { Component, Input, OnInit } from '@angular/core';
import { student } from 'src/app/interfaces/student';
import { students } from 'src/app/data/students';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student?:student;
  constructor(private activatedRoute: ActivatedRoute) { 
  this.activatedRoute.params.subscribe(params => {
    console.log(params);
    const id = parseInt(params['id']);
    this.student = students.find(s=> s.code === id)
  })
}
  ngOnInit() {
  }

}
