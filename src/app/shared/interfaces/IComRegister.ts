export interface IComRegister {
    companyName: string;
    companyEmail: string;
    companyPassword: string;
    companyConfirmPassword: string;
    location?: string;
    companyLogo?: File; // Assuming the logo is a file upload
    companyDesc?: string;
    websiteLink?: string;
    industry?: string;
}