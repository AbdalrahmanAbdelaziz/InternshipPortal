export class Company {
    id!: string;
    companyName!: string;
    companyEmail!: string;
    companyPassword!: string; // Include password if relevant
    companyConfirmPassword!: string; // Similarly, this might be handled differently
    location?: string;
    accreditation?: string; // Accreditation details
    companyLogo?: File; // Assuming the logo is a file upload
    companyDesc?: string;
    websiteLink?: string;
    industry?: string;
    role?: 'company'; // Fixed role for Company
    token!: string; // For authentication tokens, if needed
}
