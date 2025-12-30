const baseURL = "https://bora.earth";
const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/events": true,
  "/blog": false,
  "/gallery": false,
};

export { routes, baseURL };
export { home } from "./home";
export { person, social } from "./person";
export { events } from "./events";
export { work } from "./work";
export { about } from "./about";
export { blog } from "./blog";
export { gallery } from "./gallery";


export { display, mailchimp, protectedRoutes, fonts, style, schema, sameAs, effects, dataStyle } from "./once-ui.config";