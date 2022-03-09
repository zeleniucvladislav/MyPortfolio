import FinalProject from "../assets/images/projects/finalProject.jpg";
import FantasticFries from "../assets/images/projects/fantasticFries.jpg";
import Dashboard from "../assets/images/projects/dashboard.jpg";
import WeatherApp from "../assets/images/projects/weather.jpg";
import ImageGallery from "../assets/images/projects/imageGallery.jpg";

import projectType from "../types/projectsType";

const projects: projectType[] = [
  {
    id: 0,
    image: ImageGallery,
    title: "Image Gallery",
    description:
      "Image Gallery  - represents an application which uses unsplash public api to get images. This app provides recent and searched by tag images with an infinite scroll functionality, posibility to download it and vizualize author personal data",
    url: "https://unsplash-image-gallery.vercel.app",
  },
  {
    id: 1,
    image: Dashboard,
    title: "Discord Dashboard",
    description:
      "Arknights/Azur Lane Dashboard - is a web statistics and managment dashboard used by discord server staff. It provides such functionalities as aply/review form of a candidate, changing server settings, creating a server message via form and statistics as users activity, moderator overall activity, each moderator activity on certain server.",
    url: "https://www.youtube.com/watch?v=6GydFlcKaqM&feature=youtu.be",
  },
  {
    id: 2,
    image: WeatherApp,
    title: "Weather Forecast",
    description:
      "Weather Forecast - represents a web application which uses weatherbit.io public api to get weather data.This application can provide 16 day weather forecast which includes average wind, temperature, precipitation chance of a searched city.",
    url: "https://weatherforecastzv.netlify.app",
  },
  {
    id: 3,
    image: FinalProject,
    title: "Bottega Course Project",
    description:
      "Programming News - A news application build with React and SCSS. Includes such npm packages as React-Responsive,React-Carousel,React-Google-Captcha,Moment.js,React-Google-Maps,React-Scroll etc.",
    url: "https://react-course-final-project.herokuapp.com/",
  },
  {
    id: 4,
    title: "FantasticFries",
    image: FantasticFries,
    description:
      "Fantastic Fries - A multi page,responsive restaurant website that utilizes HTML5, CSS3, Flexbox, CSS Grid, Animations, media queries, custom forms, responsive images, and a range of front end development techniques.",
    url: "https://fantasticfries.netlify.com/",
  },
];

export default projects;
