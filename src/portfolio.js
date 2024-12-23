/* Change this file to get your personal Porfolio */

// Website related settings
import Dynamic from "./Dynamic";
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hi There! 👋",
  title2: "Ansh Kamra",
  logo_name: "<Ansh Kamra/>",
  nickname: "AK",
  full_name: "Ansh Kamra",
  subTitle:
  // "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  <Dynamic />,
  
  resumeLink:
    "https://drive.google.com/file/d/1Ek2Qu0tMFYKZADQier7ox4163-wGUR8w/view?usp=sharing",
  mail: "mailto:anshkamra1238@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Anshkamra1238",
  linkedin: "https://www.linkedin.com/in/anshkamra12/",
  gmail: "anshkamra1238@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/Anshkamra",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and TailwindCSS",
        "⚡ Implementing secure authentication and state management using JWT and Redux in web and mobile applications",
        "⚡ Backend development using NodeJS and ExpressJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "REST API",
          fontAwesomeClassname: "fa-cogs", // FontAwesome icon representing API functionality
          style: {
            // backgroundColor: "transparent",
            color: "#4CAF50", // Use a color that fits your theme
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#f89820",
          },
        },
      
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
       
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "JWT",
          fontAwesomeClassname: "logos:json",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "Github",
          fontAwesomeClassname: "logos:github-icon",
          style: {
            color: "#F7DF1E",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with AWS IAM, S3, VPC, EC2, ELB, RDS",
      
        "⚡ Experience hosting and managing web apps on AWS using  DynamoDB, Amazon Redshift, Amazon CloudFront and  CloudWatch  ",
      ],
      softwareSkills: [
       
        {
          skillName: "AWS IAM",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900", // AWS brand color
          },
        },

        {
          skillName: "AWS DynamoDB",
          fontAwesomeClassname: "logos:aws-dynamodb",
          style: {
            backgroundColor: "transparent",
            color: "#4053D6", // DynamoDB brand color
          },
        },
        {
          skillName: "AWS EC2",
          fontAwesomeClassname: "logos:aws-ec2",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900", // AWS brand color
          },
        },
        
        
        
        
        
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Designing",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡  Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
       
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UIET, Kurukshetra University",
      subtitle: "Bahelor of Technology in Computer Science",
      logo_path: "dal.png",
      alt_name: "KUK",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Studied Coursework Subjects like Operating Systems, Computer Networks, DBMS and Object Oriented Programming.",
        "⚡ Worked on projects on courses like Web Technologies.",
        " ⚡ Current CGPA: 8.02"
      ],
      website_link: "https://www.uietkuk.ac.in/",
    },
    {
      title: "Modern Vidya Niketan Senior Secondary School",
      subtitle: "Senior Secondary Education (Class 12)",
      logo_path: "sal.png",
      alt_name: "MVN",
      duration: "2020-2021",
      descriptions: [
        "⚡ Percentage: 95.4"
      ],
      website_link: "https://www.mvneducation.com/sector-17/school-sector-17",
    },

    {
      title: "St. Anthony's Secondary School",
      subtitle: "Secondary Education (Class 10)",
      logo_path: "St_Anthonys.jpg",
      alt_name: "An",
      duration: "2018-2019",
      descriptions: [
        "⚡ Percentage: 95.8"
      ],
      website_link: "https://stanthonysfaridabad.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cloud Computing with AWS",
      subtitle: "Internshala Trainings     Certificate_no :3ls2gkc08iu",
      logo_path: "aws.png",
      certificate_link:
        "https://trainings.internshala.com/verify_certificate",
      alt_name: "AWS",
      color_code: "#ffc475",
    },

    {
      title: "DSA in C++",
      subtitle: "Coding Ninja",
      logo_path: "CN.png",
      certificate_link:
        "https://certificate.codingninjas.com/verify/c9c8f67cfc3cfe60",
      alt_name: "DSA",
      color_code: "#ffc475",
    },

    {
      title: "Programming with Python",
      subtitle: "Internshala Trainings     Certificate_no :4y6eqkxq8nt",
      logo_path: "OIP.jpeg",
      certificate_link:
        "https://trainings.internshala.com/verify_certificate",
      alt_name: "Py",
      color_code: "#ffc475",
    },

    {
      title: "Core Java",
      subtitle: "Internshala Trainings     Certificate_no :ez3dbtggwun",
      logo_path: "OIP.jpeg",
      certificate_link:
        "https://trainings.internshala.com/verify_certificate",
      alt_name: "Py",
      color_code: "#ffc475",
    },
    {
      title: "UI/UX Design",
      subtitle: "Internshala Trainings     Certificate_no :fvc65mte46d",
      logo_path: "OIP.jpeg",
      certificate_link:
        "https://trainings.internshala.com/verify_certificate",
      alt_name: "Py",
      color_code: "#ffc475",
    },

    {
      title: "Web Development",
      subtitle: "Internshala Trainings     Certificate_no :ADAFAF8A-66FC-B522-591C-B56AB3A281F2",
      logo_path: "OIP.jpeg",
      certificate_link:
        "https://trainings.internshala.com/verify_certificate",
      alt_name: "Py",
      color_code: "#ffc475",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships and jobs.",
  header_image_path: "experience.svg",
  sections: [
    
    {
      title: "Internships",
      experiences: [
        {
          title: "Cloud Engineer Intern",
          company: "Codeodesk Technologies Pvt. Ltd ",
          company_url: "",
          logo_path: "CD.jpeg",
          duration: "July 2024 - Aug 2024",
          location: "New Delhi, India",
          description:[
          "⚡ Assisted in website hosting and AWS IAM management for over 100 user accounts, ensuring secure access control." , <br></br>,      
              "⚡ Utilized services like S3, CloudFront, and RDS to optimize cloud storage, content delivery, and database management.",
          <br></br>,
          " ⚡Worked with Amazon EC2 and VPC to deploy and manage scalable, secure environments, contributing to a 20% increase in system performance and managed CI/CD pipeline implementations for efficient deployment.",
          ],
          color: "#ee3c26",
        },
        {
          title: "Web Developer",
          company: "Integrated Tech9 Labs Pvt. Ltd ",
          company_url: "",
          logo_path: "tech99.jpeg",
          duration: "July 2023 - Aug 2023",
          location: "New Delhi, India",
          description:[
          "⚡ Designed and developed a fully responsive website using HTML5, TailwindCSS, ReactJS, and NodeJS." , <br></br>,      
              "⚡ Achieved 98% faster load times by optimizing performance through modern frameworks and best practices. ",
          <br></br>,
          " ⚡Reduced development time by 25% by leveraging reusable components and efficient, modular design. ",
          ],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Social Media Entrepreneur",
          company: "Hamari Pachan NGO",
          company_url: "",
          logo_path: "HP.jpeg",
          duration: "Oct 2024 - Dec 2024",
          location: " New Delhi, India",
          description:
            " Managing social media, creating impactful content, and developing strategies to support fundraising and awareness initiatives for underprivileged children. ",
          color: "#4285F4",
        },

        {
          title: "Student volunteer",
          company: "UIET, Kurukshetra University",
          company_url: "",
          logo_path: "dal.png",
          duration: "",
          location: " Kurukshetra, India",
          description:
            // " Managing social media, creating impactful content, and developing strategies to support fundraising and awareness initiatives for underprivileged children. ",
            "Student volunteer in the Database Team for Techno-Cultural Fest, Excelsior 2K22, ensuring data integrity and accessibility through data entry, student coordination, and online registration form creation.",
            color: "#4285F4",
        },
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. Mentioned below are some of my projects.👉 Click on a project to know more about it!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "I am eager to contribute my expertise to a dynamic team.  Contact me to explore opportunities and discuss how I can bring value to your company and achieve shared success. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@anshkamra1238",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Study Notion",
      url: "https://github.com/Anshkamra1238/StudyNotion",
      description: "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },

        {
          name: "JWT",
          iconifyClass: "logos-json",
        },
        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss-icon",
        },

        {
          name: "Postman",
          iconifyClass: "logos-postman-icon",
        },
        
        
      ],
    },
    {
      name: "Library Management System",
      url: "https://github.com/Anshkamra1238/Library-Management-System",
      description:
        "This helps in streamlining the management of 2,000+ books, authors, and publishers, significantly reducing manual data entry time. Implemented efficient database operations (insert, select, update, delete) and secure user login functionality at startup.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "MySql",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      name: "Create-react-app with AWS Amplify Auth",
      url: "https://github.com/Anshkamra1238/Create-react-app-with-AWS-Amplify-Auth",
      description: "This auth starter implements withAuthenticator HOC to provide a basic authentication flow for signing up signing in users as well as protected client side routing using AWS Amplify. Auth features: User sign up, User sign in, Multi-factor Authentication, User sign-out.",
      languages: [
        {
          name: "AWS",
          iconifyClass: "logos-aws",
          color: "#FF9900",
          backgroundColor: "transparent"
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },

        {
          name: "AWS Amplify",
          iconifyClass: "logos-aws-amplify",
        },

        {
          name: "AWS Cognito",
          iconifyClass: "logos-aws-cognito",
        },
      ],
    },

    {
      name: "Location Address Flow",
      url: "https://github.com/Anshkamra1238/Location-Address-Flow-MERNStack",
      description:
        " The solution allows users to select and save their delivery location using the Google Maps API for location search and geolocation",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },

        {
          name: "JWT",
          iconifyClass: "logos-json",
        },
        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss-icon",
        },
      ],
    },
    {
      name: "opPortfolio",
      url: "https://github.com/Anshkamra1238/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },

        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      name: "Password_Generator",
      url: "https://github.com/Anshkamra1238/Password_Generator ",
      description:
        "Creates random strong passwords as per the requirements of the user.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        
        {
          name: "Html",
          iconifyClass: "vscode-icons:file-type-html",
        },

        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },

        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss-icon",
        },
      ],
    },
    {
      name: "Weather_App",
      url: " https://github.com/Anshkamra1238/Weather_App",
      description:
        "It is a web application that provides real-time weather information for your area. It allows you to view the current temperature, wind speed, humidity, and cloud cover. Additionally, you can search for weather data by city name.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        
        {
          name: "Html",
          iconifyClass: "vscode-icons:file-type-html",
        },

        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },

        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss-icon",
        },
      ],
    },
    {
      name: "Tic Tac Toe game",
      url: "https://github.com/Anshkamra1238/Tic-Tac-Toe",
      description:
        "A responsive game with interactive gameplay and intuitive user experience.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        
        {
          name: "Html",
          iconifyClass: "vscode-icons:file-type-html",
        },

        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },

        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss-icon",
        },
      ],
    },
   
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
