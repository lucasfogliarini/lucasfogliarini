import { person } from "./person";

const about = {
  path: "/about",
  label: "Lucas Fogliarini",
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
    link: person.wa,
    label: "Bora ...",
  },
  intro: {
    display: true,
    title: "Sobre mim",
    description: (
      <>
        <h4>{person.description.h1}</h4>
        <h5>{person.description.h2}</h5>
        <h6>{person.description.h3}</h6>
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Experiência profissional",
    experiences: [
      {
        company: "Carrefour Soluções",
        timeframe: "2025 - Presente",
        role: "Arquiteto de Software",
        achievements: [
          <>
            Responsável por arquitetar soluções de software para o Carrefour Soluções.
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

export { about };
