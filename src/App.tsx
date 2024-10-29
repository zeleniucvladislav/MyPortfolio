import withSuspense from "utils/hoc/withSuspense";
import { Footer, Loader, Nav } from "./components";
import { Homepage, Projects, About, Contact } from "./pages";
import { useContentful } from "utils/hooks/useContentful";
import { parseContentfulPortfolio } from "utils/parser/parseContentfulPortfolio";
import { ReactElement, useMemo } from "react";
import { Props as ProjectProps } from "pages/projects/types";
import { Props as AboutProps } from "pages/about/types";

const LazyHomepage = withSuspense(Homepage);
const LazyProjects = withSuspense<ProjectProps>(Projects);
const LazyAbout = withSuspense<AboutProps>(About);
const LazyContact = withSuspense(Contact);

const App = (): ReactElement => {
  const { entries } = useContentful("portfolio");
  const portfolioData = useMemo(
    () => parseContentfulPortfolio(entries),
    [entries]
  );

  if (!entries) {
    return <Loader />;
  }

  const { description, profileImage, projects, technologies } = portfolioData;

  return (
    <>
      <Nav />
      <LazyHomepage />
      <section className="pages-layout">
        <LazyProjects projects={projects} />
        <LazyAbout
          description={description}
          profileImage={profileImage}
          technologies={technologies}
        />
        <LazyContact />
      </section>
      <Footer />
    </>
  );
};

export default App;
