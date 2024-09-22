import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-admin-universities',
  templateUrl: './admin-universities.component.html',
  styleUrls: ['./admin-universities.component.css']
})
export class AdminUniversitiesComponent implements OnInit {
  universities: any[] = []; // Adjust type if needed

  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit(): void {
    this.loadUniversities();
  }

  loadUniversities(): void {
    this.universitiesService.getUniversities().subscribe(
      data => this.universities = data,
      error => console.error('Error fetching universities:', error)
    );
  }

  deleteUniversity(universityId: string): void {
    if (confirm('Are you sure you want to delete this university?')) {
      this.universitiesService.deleteUniversity(universityId).subscribe(
        () => {
          this.universities = this.universities.filter(university => university.id !== universityId);
        },
        error => console.error('Error deleting university:', error)
      );
    }
  }
}
