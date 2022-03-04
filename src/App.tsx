import React, { Suspense } from "react";

import NavBar from "./components/nav/nav";
import Homepage from "./pages/homepage/Homepage";

const Projects = React.lazy(() => import("./pages/projects/Projects"));
const About = React.lazy(() => import("./pages/about/About"));

const App = () => {
  return (
    <>
      <NavBar />
      <Homepage />
      <section className="pages-layout">
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </section>
    </>
  );
};

export default App;
