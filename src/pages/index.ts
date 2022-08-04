import { lazy } from "react";

const Homepage = lazy(() => import("./homepage/Homepage"));
const Projects = lazy(() => import("./projects/Projects"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));

// import About from "./about/About";
// import Contact from "./contact/Contact";
// import Homepage from "./homepage/Homepage";
// import Projects from "./projects/Projects";

export { Homepage, Projects, About, Contact };
