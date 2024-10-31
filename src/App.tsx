import { Footer, Loader, Nav } from "./components";
import { Homepage, Projects, About, Contact } from "./pages";
import { useContentful } from "utils/hooks/useContentful";
import { parseContentfulPortfolio } from "utils/parser/parseContentfulPortfolio";
import { ReactElement, useMemo } from "react";

const App = (): ReactElement => {
  const { entries } = useContentful("portfolio");
  const portfolioData = useMemo(
    () => parseContentfulPortfolio(entries),
    [entries]
  );

  if (!entries) {
    return <Loader />;
  }

  const { description, profileImage, projects, technologies, logo } =
    portfolioData;

  return (
    <>
      <Nav logo={logo} />
      <Homepage />
      <section className="pages-layout">
        <Projects projects={projects} />
        <About
          description={description}
          profileImage={profileImage}
          technologies={technologies}
        />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
