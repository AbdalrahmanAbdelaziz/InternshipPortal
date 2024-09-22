import { Post } from "./app/shared/models/post";
import { Tag } from "./app/shared/models/tag";

export const sample_posts: Post[] = [
    {
      id: '1',
      company: 'Tech Innovations Ltd.',
      companyImage: 'post1.png',
      description: 'A leading tech company focused on software development, AI, and cutting-edge technologies.',
      objectives: 'To innovate and lead in software solutions, providing top-notch experiences for our customers.',
      location: 'New York, USA',
      internships: [
        {
          id: '1a',
          title: 'Web Development Internship',
          category: 'Software Development',
          duration: 'June - August 2024',
          applicationDeadline: '2024-05-31',
          shortDescription: 'Join our summer internship program to gain hands-on experience in front-end technologies.',
          tags: ['Web Development', 'Front-end'],
          opportunities: 5
        },
        {
          id: '1b',
          title: 'AI Research Internship',
          category: 'Artificial Intelligence',
          duration: 'July - December 2024',
          applicationDeadline: '2024-06-10',
          shortDescription: 'Work with our AI team on research projects involving machine learning and data analytics.',
          tags: ['AI', 'Machine Learning'],
          opportunities: 3
        },
        {
            id: '1c',
            title: 'AI Research Internship',
            category: 'Artificial Intelligence',
            duration: 'July - December 2024',
            applicationDeadline: '2024-06-10',
            shortDescription: 'Work with our AI team on research projects involving machine learning and data analytics.',
            tags: ['AI', 'Machine Learning'],
            opportunities: 3
          }
      ]
    },
    {
      id: '2',
      company: 'XYZ Corp',
      companyImage: 'post2.png',
      description: 'A dynamic corporation at the forefront of marketing, branding, and digital strategy.',
      location: 'Los Angeles, USA',
      objectives: 'To shape the future of digital marketing and enhance brand presence globally.',
      internships: [
        {
          id: '2a',
          title: 'Marketing Internship',
          category: 'Marketing',
          duration: 'June - September 2024',
          applicationDeadline: '2024-06-15',
          shortDescription: 'Work with our marketing team to develop strategies to enhance brand outreach.',
          tags: ['Marketing', 'Branding'],
          opportunities: 4
        },
        {
          id: '2b',
          title: 'Content Creation Internship',
          category: 'Content Development',
          duration: 'July - October 2024',
          applicationDeadline: '2024-06-25',
          shortDescription: 'Assist in developing content for our digital campaigns and social media presence.',
          tags: ['Content Creation', 'Social Media'],
          opportunities: 2
        }
      ]
    },
    {
      id: '3',
      company: 'Data Solutions Inc.',
      companyImage: 'post3.png',
      description: 'A global leader in data analytics and business intelligence, helping organizations make data-driven decisions.',
      objectives: 'To provide actionable insights through advanced data analytics and support business growth.',
      location: 'London, UK',
      internships: [
        {
          id: '3a',
          title: 'Data Analysis Internship',
          category: 'Data Science',
          duration: 'July - December 2024',
          applicationDeadline: '2024-06-30',
          shortDescription: 'Analyze large datasets to extract meaningful insights for business decision-making.',
          tags: ['Data Analysis', 'Data Science'],
          opportunities: 4
        },
        {
          id: '3b',
          title: 'Business Intelligence Internship',
          category: 'Business Intelligence',
          duration: 'August - December 2024',
          applicationDeadline: '2024-07-10',
          shortDescription: 'Support our BI team in creating dashboards and reports for internal and external stakeholders.',
          tags: ['BI', 'Data Reporting'],
          opportunities: 3
        }
      ]
    },
    {
      id: '4',
      company: 'Creative Arts Studio',
      companyImage: 'post4.png',
      description: 'A creative studio specializing in graphic design, visual arts, and branding solutions for global clients.',
      objectives: 'To push the boundaries of creativity and design, offering innovative visual solutions.',
      location: 'Berlin, Germany',
      internships: [
        {
          id: '4a',
          title: 'Graphic Design Internship',
          category: 'Design',
          duration: 'May - August 2024',
          applicationDeadline: '2024-05-15',
          shortDescription: 'Assist in creating visual content for marketing and branding projects.',
          tags: ['Graphic Design', 'Creative'],
          opportunities: 2
        },
        {
          id: '4b',
          title: 'UI/UX Design Internship',
          category: 'User Experience Design',
          duration: 'June - September 2024',
          applicationDeadline: '2024-05-25',
          shortDescription: 'Collaborate on designing user interfaces and improving the user experience for our clients.',
          tags: ['UI/UX', 'Design'],
          opportunities: 3
        }
      ]
    },
    {
        id: '5',
        company: 'Green Energy Solutions',
        companyImage: 'post5.png',
        description: 'A global leader in renewable energy and sustainable solutions, providing innovative energy alternatives.',
        objectives: 'To revolutionize the energy sector by promoting clean, renewable energy solutions.',
        location: 'Copenhagen, Denmark',
        internships: [
          {
            id: '5a',
            title: 'Renewable Energy Research Internship',
            category: 'Renewable Energy',
            duration: 'July - December 2024',
            applicationDeadline: '2024-06-30',
            shortDescription: 'Conduct research on sustainable energy technologies and solutions to support our green energy projects.',
            tags: ['Renewable Energy', 'Sustainability'],
            opportunities: 4
          },
          {
            id: '5b',
            title: 'Environmental Policy Internship',
            category: 'Environmental Science',
            duration: 'June - November 2024',
            applicationDeadline: '2024-06-10',
            shortDescription: 'Work on drafting and analyzing environmental policies and strategies for renewable energy projects.',
            tags: ['Environmental Policy', 'Sustainability'],
            opportunities: 3
          }
        ]
      },
      {
        id: '6',
        company: 'Global Health Initiative',
        companyImage: 'post6.png',
        description: 'An international organization focused on improving public health and access to medical care worldwide.',
        objectives: 'To enhance global healthcare standards and reduce health disparities across communities.',
        location: 'Geneva, Switzerland',
        internships: [
          {
            id: '6a',
            title: 'Public Health Internship',
            category: 'Healthcare',
            duration: 'August - December 2024',
            applicationDeadline: '2024-07-15',
            shortDescription: 'Collaborate on public health projects aimed at improving community health and disease prevention.',
            tags: ['Public Health', 'Healthcare'],
            opportunities: 5
          },
          {
            id: '6b',
            title: 'Medical Research Internship',
            category: 'Medical Research',
            duration: 'July - November 2024',
            applicationDeadline: '2024-06-25',
            shortDescription: 'Assist in medical research projects that focus on global health challenges such as infectious diseases.',
            tags: ['Medical Research', 'Healthcare'],
            opportunities: 3
          }
        ]
      },
      {
        id: '7',
        company: 'EcoTech Innovations',
        companyImage: 'post7.png',
        description: 'A cutting-edge technology company dedicated to creating eco-friendly solutions for everyday life.',
        objectives: 'To innovate and develop technologies that minimize environmental impact and promote sustainability.',
        location: 'Tokyo, Japan',
        internships: [
          {
            id: '7a',
            title: 'Sustainable Product Design Internship',
            category: 'Product Design',
            duration: 'May - October 2024',
            applicationDeadline: '2024-04-30',
            shortDescription: 'Help design and prototype eco-friendly products that reduce waste and environmental impact.',
            tags: ['Product Design', 'Sustainability'],
            opportunities: 4
          },
          {
            id: '7b',
            title: 'Green Technology Development Internship',
            category: 'Green Technology',
            duration: 'June - November 2024',
            applicationDeadline: '2024-05-20',
            shortDescription: 'Work on developing and improving green technologies that promote sustainable living.',
            tags: ['Green Technology', 'Innovation'],
            opportunities: 2
          }
        ]
      }
  ];

  export const sample_tags: Tag[] = [
    { name: 'All' },  
    { name: 'Software Development' },
    { name: 'Marketing' },
    { name: 'Data Science' },
    { name: 'Design' },
    { name: 'Artificial Intelligence' },
    { name: 'Business Intelligence' },
    { name: 'Content Development' },
    { name: 'User Experience Design' },
    { name: 'Web Development' },
    { name: 'Front-end'},
    { name: 'Branding' },
    { name: 'Data Analysis' },
    { name: 'Graphic Design' },
    { name: 'Content Creation' },
    { name: 'AI' },
    { name: 'UI/UX' }
];
  


export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];