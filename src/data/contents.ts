// src/data/contents.ts

export const Bio = {
  name: "Istvan Biczyk",
  roles: ["Full-stack Web Developer", "Software Developer"],
  description:
    "I’m a web and software developer focused on building small, production-ready web applications and modern, responsive websites. I work primarily with React, Next.js, and Python, and I enjoy taking projects from rough idea through design, implementation, and deployment. Recently I’ve been working on freelance projects and personal products, helping clients and collaborators ship clean, maintainable solutions.",
  github: "https://github.com/stevebiczyk",
  linkedin: "https://www.linkedin.com/in/istvan-biczyk/",
  twitter: "https://twitter.com/BiczykSteve",

  // Keep your existing CV link, but expose it under the name the UI expects:
  CV: "https://drive.google.com/file/d/1_mIiZx4S_oibiHr5biiUL5i75qpZ5kCC/view",
  cv: "https://drive.google.com/file/d/1_mIiZx4S_oibiHr5biiUL5i75qpZ5kCC/view",
};

export const skills = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
      },
      {
        name: "jQuery",
        image: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
      },
      {
        name: "GraphQl",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Flask",
        image:
          "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      },
      {
        name: "Django",
        image:
          "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Heroku",
        image: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      // {
      //   name: "Adobe XD",
      //   image:
      //     "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      // },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "",
    role: "Freelance Full Stack Developer",
    company: "",
    date: "Aug 2023 - Present Day",
    desc: "Working on Full Stack and Front End projects for  various clients",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
];

export const education = [
  {
    id: 0,
    img: "https://codeinstitute.net/wp-content/themes/codeinstitute/img/svg/Code_logo_grey_fit.svg",
    school: "The Code Institute, Dublin, Ireland",
    date: "July 2022 - August 2023",
    grade: "Pass",
    desc: "I completed the course and gained a Level 5(UK) Diploma in Full Stack Web Development at The Code Institute, where I am learning the fundamentals of web development, including HTML, CSS, JavaScript, Python, Flask, Django, MongoDB, MySQL, and React. I am also gaining experience in working with Git, GitHub, Heroku, and Netlify. I am excited to continue learning and growing as a developer.",
    qual: " Diploma in Full Stack Web Development",
  },
  {
    id: 1,
    img: "https://barhacs.hu/wp-content/uploads/2024/11/BARHACS_Oktatokozpont-feher.png",
    school: "Barhacs & Co Education and Exam Centre, Budapest",
    date: "Sept 2001 - Feb 2003",
    grade: "Pass with Merit",
    desc: "I completed my higher education at Barhacs & Co Education and Exam Centre, where I studied software development and computer studies. I graduated with a grade of Pass with Merit.",
    qual: "Higher National Diploma in Software Development and Computer Studies",
  },
  {
    id: 2,
    img: "https://petrik.hu/wp-content/uploads/2020/08/logo-nagy.png",
    school: "Petrik Lajos High School of Chemistry, Budapest",
    date: "Sept 1992 - June 1997",
    grade: "Pass",
    desc: "I completed my middle education at Petrik Lajos High School of Chemistry, where I studied chemistry, biology, physics, mathematics, and computer science. I graduated with a grade of Pass.",
    qual: "High School Diploma",
  },
];

export const projects = [
  {
    id: 0,
    title: "Crown Clothing",
    date: "Jun 2023 - Jul 2023",
    description:
      "Crown Clothing is a web application that allows users to browse and purchase clothing items. The application is built using React JS, Redux, Firebase, and Stripe. Users can sign in with their Google account, add items to their cart, and make payments using Stripe. The application is fully responsive and provides a seamless user experience across all devices.",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [
      "JavaScript",
      "TypeScript",
      "React Js",
      "Redux",
      "Tanstack",
      "GraphQl",
      "Jest",
      "Stripe",
      "Firebase",
    ],
    category: "web app",
    github: "https://github.com/stevebiczyk",
    webapp: "https://trackify.duckdns.org",
  },
  {
    id: 0,
    title: "Crown Clothing",
    date: "Jun 2023 - Jul 2023",
    description:
      "Crown Clothing is a web application that allows users to browse and purchase clothing items. The application is built using React JS, Redux, Firebase, and Stripe. Users can sign in with their Google account, add items to their cart, and make payments using Stripe. The application is fully responsive and provides a seamless user experience across all devices.",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [
      "JavaScript",
      "TypeScript",
      "React Js",
      "Redux",
      "Tanstack",
      "GraphQl",
      "Jest",
      "Stripe",
      "Firebase",
    ],
    category: "web app",
    github: "https://github.com/stevebiczyk",
    webapp: "https://trackify.duckdns.org",
  },
  {
    id: 0,
    title: "Crown Clothing",
    date: "Jun 2023 - Jul 2023",
    description:
      "Crown Clothing is a web application that allows users to browse and purchase clothing items. The application is built using React JS, Redux, Firebase, and Stripe. Users can sign in with their Google account, add items to their cart, and make payments using Stripe. The application is fully responsive and provides a seamless user experience across all devices.",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [
      "JavaScript",
      "TypeScript",
      "React Js",
      "Redux",
      "Tanstack",
      "GraphQl",
      "Jest",
      "Stripe",
      "Firebase",
    ],
    category: "web app",
    github: "https://github.com/stevebiczyk",
    webapp: "https://trackify.duckdns.org",
  },
  {
    id: 1,
    title: "RecipeShare",
    date: "Apr 2023 - May 2023",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
      "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/stevebiczyk",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Istvan Biczyk",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/stevebiczyk",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
];

export const TimeLineData = [
  { year: 2001, text: "Started my software development journey" },
  {
    year: 2003,
    text: "Completed my Diploma at the Barhacs Study and Exam Centre",
  },
  { year: 2004, text: "Worked as IT Support Technician" },
  { year: 2023, text: "Completed my Diploma at the Code Institute" },
  { year: 2024, text: "Worked as a freelance web developer" },
];
