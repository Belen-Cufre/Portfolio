import i18n from "../utils/i18n/i18n";
import {
    mobile,
    backend,
    creator,
    web,
    html,
    css,
    javascript,
    reactjs,
    redux,
    nodejs,
    tailwind,
    postgresql,
    sequelize,
    github,
    trados,
    wf,
    memoq,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  export let navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  let services = [
    {
      title: "Desarrollo Full-Stack",
      icon: web,
    },
    {
      title: "Desarrollo Backend",
      icon: backend,
    },
    {
      title: "Desarrollo Frontend",
      icon: creator,
    },
    {
      title: "Traducciones legalizadas",
      icon: mobile,
    },
  ];
  
  let technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "Express JS",
    //   icon: "",
    // },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Sequelize",
      icon: sequelize,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Git Hub",
      icon: github,
    },
    {
      name: "TRADOS",
      icon: trados,
    },
    {
      name: "Wordfast",
      icon: wf,
    },
    {
      name: "MemoQ",
      icon: memoq,
    },
  ];
  
  let experiences = [
    {
      title: i18n.t('constants.experiences.one.title'),
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [i18n.t('constants.experiences.one.point1'), i18n.t('constants.experiences.one.point2'), i18n.t('constants.experiences.one.point3'), i18n.t('constants.experiences.one.point4')],
    },
    {
      title: i18n.t('constants.experiences.two.title'),
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [i18n.t('constants.experiences.two.point1'), i18n.t('constants.experiences.two.point2'), i18n.t('constants.experiences.two.point3'), i18n.t('constants.experiences.two.point4')],
    },
    {
      title: i18n.t('constants.experiences.three.title'),
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [i18n.t('constants.experiences.three.point1'), i18n.t('constants.experiences.three.point2'), i18n.t('constants.experiences.three.point3'), i18n.t('constants.experiences.three.point4')],
    },
    {
      title: i18n.t('constants.experiences.four.title'),
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [i18n.t('constants.experiences.four.point1'), i18n.t('constants.experiences.four.point2'), i18n.t('constants.experiences.four.point3'), i18n.t('constants.experiences.four.point4')],
    },
  ];
  
  let testimonials = [
    {
      testimonial: i18n.t('constants.testimonials.test1'),
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial: i18n.t('constants.testimonials.test2'),
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial: i18n.t('constants.testimonials.test3'),
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  let projects = [
    {
      name: i18n.t('constants.projects.one.name'),
      description: i18n.t('constants.projects.one.description'),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Belen-Cufre/PI-Dogs-main/",
    },
    {
      name: i18n.t('constants.projects.two.name'),
      description: i18n.t('constants.projects.two.description'),
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio Code",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Belen-Cufre/CV_Cufre",
    },
    {
      name: i18n.t('constants.projects.three.name'),
      description: i18n.t('constants.projects.three.description'),
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/FedeCoderTeam/PatitasFelices",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };