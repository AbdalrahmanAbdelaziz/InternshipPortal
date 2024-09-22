export interface Internship {
  id: string;
  company: string;
  position: string;
  appliedDate: string;
  status: 'Done' | 'Pending' | 'Finished' | 'Rejected';
  evaluation?: string; // Optional field for evaluation
  certificateLink?: string; // Optional field for certificate link
}
