import { lazy } from "react";

const Homepage = lazy(() => import("./homepage/Homepage"));
const Projects = lazy(() => import("./projects/Projects"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));

export { Homepage, Projects, About, Contact };
