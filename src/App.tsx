import { Footer, Loader, Nav, Notification } from "components";
import { Homepage, Projects, About, Contact } from "pages";
import { useContentful } from "utils/hooks/useContentful";
import { parseContentfulPortfolio } from "utils/parser/parseContentfulPortfolio";
import { ReactElement, useEffect, useLayoutEffect, useMemo } from "react";
import Aos from "aos";

const App = (): ReactElement => {
  const { entries, error } = useContentful("portfolio");
  const portfolioData = useMemo(
    () => parseContentfulPortfolio(entries),
    [entries]
  );

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  useLayoutEffect(() => {
    if (entries) {
      const { hash } = window.location;
      if (!hash) return;

      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [entries]);

  if (error) {
    return <Notification message={error} />;
  }

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
