export interface Trainee {
    id: string;
    name: string;
    university: string;
    major: string;
    gpa: number;
    internshipName: string;
    status: 'In Progress' | 'Done';
    evaluation?: string;
    certificateUrl?: string;
  }
  