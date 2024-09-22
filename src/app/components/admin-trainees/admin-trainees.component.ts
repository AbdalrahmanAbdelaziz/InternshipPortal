import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-admin-trainees',
  templateUrl: './admin-trainees.component.html',
  styleUrls: ['./admin-trainees.component.css']
})
export class AdminTraineesComponent implements OnInit {
  students: any[] = []; // Adjust the type if needed

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentsService.getStudents().subscribe(
      data => this.students = data,
      error => console.error('Error fetching students:', error)
    );
  }

  deleteStudent(studentId: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentsService.deleteStudent(studentId).subscribe(
        () => {
          this.students = this.students.filter(student => student.id !== studentId);
        },
        error => console.error('Error deleting student:', error)
      );
    }
  }
}
