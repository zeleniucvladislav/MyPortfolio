import withSuspense from "utils/hoc/withSuspense";
import { Footer, Nav } from "./components";
import { Homepage, Projects, About, Contact } from "./pages";

const App = () => {
  const LazyHomepage = withSuspense(Homepage);
  const LazyProjects = withSuspense(Projects);
  const LazyAbout = withSuspense(About);
  const LazyContact = withSuspense(Contact);
  return (
    <>
      <Nav />
      {LazyHomepage}
      <section className="pages-layout">
        {LazyProjects}
        {LazyAbout}
        {LazyContact}
      </section>
      <Footer />
    </>
  );
};

export default App;
