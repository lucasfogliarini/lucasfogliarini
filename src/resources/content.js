const person = {
  firstName: "Lucas",
  lastName: "Fogliarini",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  currentProject: "Bora Morar",
  role: "Arquiteto e Engenheiro de Soluções",
  h1: "Em qual terra você quer morar?",
  //h1: "Which land do you want to live in?"

  h2: "Habilitando educação financeira e acesso ao crédito para que famílias realizem o sonho da moradia própria, de forma responsável, sustentável e consciente no presente, em harmonia com a natureza, a sociedade e o futuro.",
  //h2: "Habilitando educação financeira e acesso ao crédito para que famílias realizem o sonho da moradia própria, de forma responsável, sustentável e consciente no presente, em harmonia com a natureza, a sociedade e o futuro.",
  //h2: "Promovemos educação financeira e acesso responsável ao crédito, permitindo que famílias realizem o sonho da moradia própria com consciência no presente, sustentabilidade e compromisso com o futuro, a natureza e a sociedade.",
  //h2: "Ajudamos famílias a transformar o sonho da moradia própria em realidade por meio de educação financeira e crédito consciente, respeitando o presente, o futuro, a natureza e a sociedade.",
  //h2: "Habilitamos famílias com educação financeira e soluções de crédito responsável para a conquista da moradia própria, promovendo sustentabilidade econômica, social e ambiental no presente e no futuro.",
  avatar: "/images/avatar.jpg",
  email: "lucasfogliarini@gmail.com",
  locationTimeZone: "America/Sao_Paulo",// Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location: "Porto Alegre - RS",
  header: "Lucas Fogliarini",
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Assine a Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lucasfogliarini",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lucasfogliarini",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/bora.png",
  label: "Home",
  title: `${person.name}, ${person.h1}`,
  description: `${person.h2}`,
  headline: <>{person.h1}</>,
  featured: {
    display: true,
    title: <>Trabalhando no <strong className="ml-4">{person.currentProject}</strong></>,
    href: "/work/BoraMorar",
  },
  subline: (
    <>
      {person.h2}
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Encontre ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/5551992364249?text=Bora?!",
  },
  intro: {
    display: true,
    title: "Sobre mim",
    description: (
      <>
        Sou movido por um sonho que une fé, responsabilidade e ação concreta. Estou sonhando, orando, arquitetando e me comunicando com seguidores de Jesus Cristo para cuidar da nossa terra de forma consciente, sustentável e responsável com o presente e o futuro.
        <br />
        <br />
        Minha atuação combina visão espiritual, pensamento sistêmico e execução prática. Busco integrar tecnologia, arquitetura, educação financeira e moradia sustentável como instrumentos de transformação social, sempre em harmonia com a criação e com as pessoas.
        <br />
        <br />
        Quem deseja compreender mais profundamente minha trajetória, minhas ideias e os projetos que estou construindo pode encontrar mais detalhes no meu LinkedIn, GitHub e Bora Encontros, onde compartilho minha visão, meus trabalhos e as iniciativas que estou desenvolvendo ao longo dessa jornada.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Experiência profissional",
    experiences: [
      {
        company: "Bem Promotora",
        timeframe: "2024 - Presente",
        role: "Engenheiro de Software",
        achievements: [
          <>
            Responsável por promover o desenvolvimento eficiente de software na Bem Promotora por meio de uma plataforma robusta, confiável e escalável, fornecendo suporte técnico, ferramentas e boas práticas que capacitam as equipes a atingirem seus objetivos de negócio com qualidade e agilidade.
            Foco em impulsionar inovação, excelência técnica e eficiência operacional, garantindo segurança, estabilidade e alta performance da plataforma de desenvolvimento.
          </>,
          <>
            Enabling Team, SCRUM, C4, EDA, DDD, Azure DevOps,  ASP.NET Core 8,  Kubernetes (AKS), Docker, OpenTelemetry
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16, 
            height: 9,
          },*/
        ],
      },
      {
        company: "Bem Promotora",
        timeframe: "2024 - Presente",
        role: "Engenheiro de Software",
        achievements: [
          <>
            Responsável por promover o desenvolvimento eficiente de software na Bem Promotora por meio de uma plataforma robusta, confiável e escalável, fornecendo suporte técnico, ferramentas e boas práticas que capacitam as equipes a atingirem seus objetivos de negócio com qualidade e agilidade.
            Foco em impulsionar inovação, excelência técnica e eficiência operacional, garantindo segurança, estabilidade e alta performance da plataforma de desenvolvimento.
          </>,
          <>
            Enabling Team, SCRUM, C4, EDA, DDD, Azure DevOps,  ASP.NET Core 8,  Kubernetes (AKS), Docker, OpenTelemetry
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16, 
            height: 9,
          },*/
        ],
      },
      {
        company: "Cogna",
        timeframe: "2022 - 2024",
        role: "Arquiteto de Software",
        achievements: [
          <>
            Liderança Técnica, arquitetura, publicações, desenvolvimento e monitoramento de serviços na Azure Cloud para o projeto Athenas no Cogna PTC.
          </>,
          <>
            SAFe, SCRUM, Event Storming, EDA, BDD, Azure AD, Azure Service Bus, Azure Function(NET Core 6), Azure DevOps, App Insights,  C#, Dynamics/Power Apps, Azure Web App, Kafka, RabbitMQ.
          </>
        ],
        images: []
      },
      {
        company: "Way2",
        timeframe: "2021 - 2022",
        role: "Arquiteto de Software",
        achievements: [
          <>
            Análise, desenvolvimento e arquitetura do PrismaGD, um software de geração distribuída de energia solar para monitorar, controlar e otimizar a produção de energia a partir de múltiplos sistemas de energia solar distribuídos em uma rede.
          </>,
          <>
            SCRUM, microsserviços,  ASP.NET Core 5, C#, EF Core 5,  Service Bus, Functions, Kubernetes, Azure, MSSQL Server, GraphQL, code review.
          </>
        ],
        images: []
      },
      {
        company: "Dell",
        timeframe: "2018 - 2021",
        role: "Engenheiro de Software",
        achievements: [
          <>
            Análise, desenvolvimento, arquitetura de soluções para o Dell Latam Finance IT.
          </>,
          <>
            SCRUM, TDD, PCF Apps e Jobs, ASP.NET Core, C#, EF Core e EF6, microserviços, gitlab, Oracle,  Angular 8
          </>
        ],
        images: []
      },
      {
        company: "Warren, Trinca, ...",
        timeframe: "2008 - 2018",
        role: "Arquiteto e Engenheiro de Software",
        achievements: [
          <>
            <a target="_blank" href="https://www.linkedin.com/in/lucasfogliarini/#experience">Experiência profissional no LinkedIn</a>
          </>
        ],
        images: []
      }
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Estudos",
    institutions: [
      {
        name: "Unisinos",
        description: <>Gestão de Tecnologia da Informação</>,
      }
    ],
  },
  technical: {
    display: false,
    title: "Competências",
    skills: [
      {
        title: "Arquitetura de Software",
        description: <>Planejamento e implementação de arquiteturas escaláveis, incluindo microsserviços, mensageria e integração com sistemas distribuídos.</>,
        images: [],
      },
      {
        title: "Domain-Driven Design (DDD)",
        description: <>Modelagem de domínios complexos utilizando DDD, Event Sourcing e Event Storming para alinhar negócio e tecnologia.</>,
        images: [],
      },
      {
        title: "ASP.NET Core",
        description: <>Desenvolvimento de APIs e aplicações robustas com ASP.NET Core 8, aplicando boas práticas de arquitetura e engenharia de software.</>,
        images: [],
      },
      {
        title: "Docker & Azure",
        description: <>Containerização com Docker e deploy de aplicações em Azure Container Apps, Functions e Kubernetes.</>,
        images: [],
      },
      {
        title: "Mensageria",
        description: <>Integração e processamento assíncrono de eventos com Apache Kafka, Service Bus e RabbitMQ.</>,
        images: [],
      },
      {
        title: "OpenTelemetry",
        description: <>Monitoramento e rastreamento distribuído de aplicações utilizando OpenTelemetry e Dynatrace.</>,
        images: [],
      },
      {
        title: "React",
        description: <>Criação de interfaces dinâmicas e performáticas utilizando React e seu ecossistema.</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Desenvolvimento de aplicações modernas com Next.js, explorando SSR, SSG e integração com APIs.</>,
        images: [],
      },
      {
        title: "Angular",
        description: <>Desenvolvimento de interfaces modernas e responsivas com Angular.</>,
        images: [],
      },
      {
        title: "Todas Competências",
        description: <><a target="_blank" href="https://github.com/lucasfogliarini/lucasfogliarini/blob/main/Tecnologista.md">Todas competências no github</a></>,
        images: [],
      },
    ],
  }
};

const work = {
  path: "/work",
  label: "Bora?",
  title: `Bora? – ${person.name}`,
  description: `Projetos de ${person.name}`,
};

const events = {
  path: "/events",
  label: "Encontros",
  title: "Bora Encontros",
  subtitle: "Conectando famílias, construtores e agentes financeiros para viabilizar moradias autossustentáveis, responsáveis e alinhadas ao futuro.",
  description: '',
  calendarEvents: "https://lu.ma/embed/calendar/cal-GL6rhFY3X6D1PY6/events",
  subLink: "https://lu.ma/bora",
  subText: "Receber convites de palestras e debates por e-mail",
  pubLink: "https://luma.com/create?calendar=cal-GL6rhFY3X6D1PY6",
  pubText: "Palestrar ou Debater presencialmente ou virtualmente"
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};


const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, events, gallery };
