export interface IUserRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    major?: string;
    startDate?: Date;
    gradDate?: Date;
    cvFile?: File;
    portfolio?: string;
    gpa?: number;
    nationalID?: string;
  }