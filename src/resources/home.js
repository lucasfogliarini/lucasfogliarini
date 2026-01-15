import { person } from "./person";

const home = {
  path: "/",
  image: "/images/og/bora.png",
  label: "Home",
  title: `${person.name}: ${person.currentProject.headline}`,
  description: `${person.currentProject.subline}`,
  featured: {
    display: true,
    title: <>Trabalhando no <strong className="ml-4">{person.currentProject.name}</strong></>,
    href: person.currentProject.href,
  },
  headline: <>{person.currentProject.headline}</>,
  subline: (
    <>
      {person.currentProject.subline}
    </>
  ),
  thereText: "Fica ali no ...",
  thereLink: "https://wa.me/5551992364249?text=Fica ali no ...",
};

export { person, home };