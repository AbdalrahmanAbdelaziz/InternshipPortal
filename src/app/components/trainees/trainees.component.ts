import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../../services/trainee.service';
import { Trainee } from '../../shared/interfaces/traineeInterface';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.css']
})
export class TraineesComponent implements OnInit {
  inProgressTrainees: Trainee[] = [];
  doneTrainees: Trainee[] = [];

  constructor(private traineeService: TraineeService) {}

  ngOnInit(): void {
    this.traineeService.getTrainees().subscribe(
      (trainees: Trainee[]) => {
        this.inProgressTrainees = trainees.filter(t => t.status === 'In Progress');
        this.doneTrainees = trainees.filter(t => t.status === 'Done');
      },
      error => {
        console.error('Error fetching trainees', error);
      }
    );
  }

  isEditable(status: string): boolean {
    return status === 'Done';
  }

  onFileChange(event: any, trainee: Trainee): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        trainee.certificateUrl = reader.result as string;
        // Save the file to the server if needed
      };
      reader.readAsDataURL(file);
    }
  }
}
