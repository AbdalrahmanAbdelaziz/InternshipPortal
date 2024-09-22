const BASE_URL = 'http://localhost:5000';

// Posts-related URLs
export const POSTS_URL = BASE_URL + '/api/posts';        //
export const POSTS_TAGS_URL = POSTS_URL + '/tags';   //   
export const POSTS_BY_SEARCH_URL = POSTS_URL + '/search/';      //
export const POSTS_BY_TAG_URL = POSTS_URL + '/tag/';     //
export const POST_BY_ID_URL = POSTS_URL + '/';        //
                                                                                            //6 :24//
// Authentication-related URLs
export const LOGIN_URL = BASE_URL + '/api/auth/login';              //-
export const LOGOUT_URL = BASE_URL + '/api/auth/logout';           //

// Registration-related URLs
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const COMPANY_REGISTER_URL = BASE_URL + '/api/companies/register';
export const UNIVERSITY_REGISTER_URL = BASE_URL + '/api/universities/register';


//Profile
export const USER_PROFILE_URL = BASE_URL + '/api/user/profile';
export const COMPANY_PROFILE_URL = BASE_URL + '/api/company/profile';
export const UNIVERSITY_PROFILE_URL = BASE_URL + '/api/university/profile';


// Internship-related URLs
export const INTERNSHIPS_URL = BASE_URL + '/api/internships';
export const APPLY_FOR_INTERNSHIP_URL = (id: string) => `${INTERNSHIPS_URL}/${id}/apply`;
export const INTERNSHIP_BY_ID_URL = (id: string) => `${INTERNSHIPS_URL}/${id}`;
export const USER_INTERNSHIPS_URL = (userId: string) => `${INTERNSHIPS_URL}?userId=${userId}`;


// Trainee-related URLs
export const TRAINEES_URL = BASE_URL + '/api/trainees';


// Requests-for-uni-related_ URLs-
export const Requests_URL = BASE_URL + '/api/requests';
export const ACCEPT_REQUEST_URL = BASE_URL + '/api/requests/accept';
export const REJECT_REQUEST_URL = BASE_URL + '/api/requests/reject';



// Students-related_uni URL
export const STUDENTS_URL = BASE_URL + '/api/students'; 
export const DELETE_STUDENT_URL = BASE_URL + '/api/students';


// admin-Company-related URLs
export const COMPANIES_URL = BASE_URL + '/api/companies';
export const DELETE_COMPANY_URL = COMPANIES_URL;


// admin-University-related URLs
export const UNIVERSITIES_URL = BASE_URL + '/api/universities';
export const DELETE_UNIVERSITY_URL = UNIVERSITIES_URL;

// Post Request-related URLs
export const POST_REQUESTS_URL = BASE_URL + '/api/post-requests';
export const APPROVE_POST_REQUEST_URL = BASE_URL + '/api/post-requests/approve';
export const REJECT_POST_REQUEST_URL = BASE_URL + '/api/post-requests/reject';