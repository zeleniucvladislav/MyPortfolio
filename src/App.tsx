import React, { Suspense } from "react";
import { Loader, Nav } from "./components";
import { Homepage } from "./pages";

const Projects = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Projects }))
);
const About = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.About }))
);
const Contact = React.lazy(() =>
  import("./pages").then((module) => ({ default: module.Contact }))
);

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
