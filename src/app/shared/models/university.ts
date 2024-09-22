export class University {
    id!: string;
    UniName!: string;
    UniEmail!: string;
    UniPassword!: string; // Include password if relevant
    UniConfirmPassword!: string; // Similarly, this might be handled differently
    accreditation!: boolean;
    role?: 'university'; // Fixed role for University
    token!: string; // For authentication tokens, if needed
}
