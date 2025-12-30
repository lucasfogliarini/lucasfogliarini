const currentProjectName = "Bora Morar";
const person = {
  firstName: "Lucas",
  lastName: "Fogliarini",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  currentProject: {
    name: currentProjectName,
    href: "/work/BoraMorar",
    headline: "Em qual terra você quer morar?",
    //headline: "Which land do you want to live in?"
    subline: "Habilitando educação financeira e acesso ao crédito para que famílias realizem o sonho da moradia própria, de forma responsável, sustentável e consciente no presente, em harmonia com a natureza, a sociedade e o futuro.",
    //subline: "Habilitando educação financeira e acesso ao crédito para que famílias realizem o sonho da moradia própria, de forma responsável, sustentável e consciente no presente, em harmonia com a natureza, a sociedade e o futuro.",
    //subline: "Promovemos educação financeira e acesso responsável ao crédito, permitindo que famílias realizem o sonho da moradia própria com consciência no presente, sustentabilidade e compromisso com o futuro, a natureza e a sociedade.",
    //subline: "Ajudamos famílias a transformar o sonho da moradia própria em realidade por meio de educação financeira e crédito consciente, respeitando o presente, o futuro, a natureza e a sociedade.",
    //subline: "Habilitamos famílias com educação financeira e soluções de crédito responsável para a conquista da moradia própria, promovendo sustentabilidade econômica, social e ambiental no presente e no futuro.",
  },
  role: "Arquiteto e Engenheiro de Soluções",
  wa: "https://wa.me/5551992364249?text=Bora?!",
  linkedin: "https://www.linkedin.com/in/lucasfogliarini",
  github: "https://github.com/lucasfogliarini",
  avatar: "/images/avatar.jpg",
  email: "lucasfogliarini@gmail.com",
  locationTimeZone: "America/Sao_Paulo",// Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location: "Porto Alegre - RS",
  header: currentProjectName,
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
  description: {
    h1: "Sou movido por um sonho que une fé, responsabilidade e ação concreta. Estou sonhando, orando, arquitetando com Jesus e me comunicando com seus seguidores para cuidar da nossa terra de forma consciente, sustentável e responsável com o presente e o futuro.",
    h2: "Minha atuação combina visão espiritual, pensamento sistêmico e execução prática. Busco integrar tecnologia, arquitetura, educação financeira e moradia sustentável como instrumentos de transformação social, sempre em harmonia com a criação e com as pessoas.",
    h3: "Para compreender com mais profundidade minha trajetória profissional, ideias e projetos, você pode acessar meu LinkedIn, GitHub ou participar dos encontros que divulgo. Nesses espaços, compartilho minha visão, minhas experiências e as iniciativas que venho desenvolvendo ao longo dessa jornada."
  }
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: person.github,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: person.linkedin,
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

export { person, social };