import React, { Suspense } from "react";
import Loader from "./components/loader/loader";

import { Nav } from "./components";
import Homepage from "./pages/homepage/Homepage";

const Projects = React.lazy(() => import("./pages/projects/Projects"));
const About = React.lazy(() => import("./pages/about/About"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));

const App = () => {
  return (
    <>
      <Nav />
      <Homepage />
      <section className="pages-layout">
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </section>
    </>
  );
};

export default App;
