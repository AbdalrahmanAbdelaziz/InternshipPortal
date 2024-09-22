import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];

  constructor(private studentsService: StudentsService, authService: AuthService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentsService.getStudents().subscribe(data => {
      this.students = data;
    });
  }
}
