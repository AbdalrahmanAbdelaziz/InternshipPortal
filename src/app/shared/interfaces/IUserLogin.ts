export interface IUserLogin{
    email: string;
    password: string;
    role: 'user' | 'university' | 'company';
}