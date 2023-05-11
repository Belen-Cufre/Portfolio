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
  
  export const navLinks = [
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
  
  const services = [
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
  
  const technologies = [
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
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "App de perros",
      description:
        "¡Mi primera creación! Fue mi trabajo individual para el bootcamp de Henry. En esta página podrás ver todas las razas de perros que nos brinda una API de perros externa y a su vez cargar tus propios perros, ya que en mi caso particular también amo a los perros sin raza comercial. Podrás filtrarlos por temperamento y por fuente: es decir si son perros que provienen de la API o son cargados por tí. También los puedes ordernar alfabéticamente y por peso.",
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
      name: "Mi CV",
      description:
        "Con motivo de mi falta de experiencia en HTML y CSS, decidí seguir practicando y hacer mi CV. Tiene un menú desplegable que incluye la opción de ver el mismo CV en inglés. También cuenta con mi información de contacto para facilitar la comunicación.",
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
      name: "Patitas Felices",
      description:
        "Página web creada como trabajo final para el bootcamp de Henry. Fue un trabajo grupal de 8 miembros. Mi desempeño se basó mayormente en el Backend. La página se hizo para un refugio de perros de la provincia de Córdoba, Argentina. A través del sitio, se puede solicitar la adopción de los perros disponibles, hacer donaciones y compras de productos. También se pueden dejar reseñas una vez logueado y los usuarios con perfil de administrador tienen acceso a una sección privada donde se pueden gestionar las compras, las adopciones, los permisos de los usuarios, entre otras.",
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