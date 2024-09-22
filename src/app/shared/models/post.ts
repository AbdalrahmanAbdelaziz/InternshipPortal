export class Internship {
  id: string = '';
  title: string = '';
  category: string = '';
  duration: string = '';
  applicationDeadline: string = '';
  shortDescription: string = '';
  tags: string[] = [];
  opportunities: number = 0;
}

export class Post {
  id: string = '';
  company: string = '';
  companyImage: string = '';
  description: string = '';
  objectives: string = '';
  location: string = '';
  internships: Internship[] = [];
}
