import FinalProject from "assets/images/projects/finalProject.jpg";
import FantasticFries from "assets/images/projects/fantasticFries.jpg";
import Dashboard from "assets/images/projects/dashboard.jpg";
import WeatherApp from "assets/images/projects/weather.jpg";
import ImageGallery from "assets/images/projects/imageGallery.jpg";
import Countdown from "assets/images/projects/countdown.jpg";
import Brizy from "assets/images/projects/brizy.png";

import projectType from "types/projectsType";

const projects: projectType[] = [
  {
    id: 0,
    image: Brizy,
    title: "Brizy",
    description: `Brizy - is the most user-friendly visual page builder in town! No designer or developer skills required. The only tools you'll need to master are clicks and drags.`,
    url: "https://www.brizy.io/",
  },
  {
    id: 1,
    image: Dashboard,
    title: "Discord Dashboard",
    description: `Arknights/Azur Lane Dashboard - represents my work project which is a web statistics and managment dashboard used by discord server staff from azur lane and arknights. 
    It provides such functionalities as aply/review form of a candidate, viewing and changing discord server settings, 
    very customizable way to create a server message via form and statistics about users activity, moderator overall activity, each moderator activity on certain server.`,
    url: "https://youtu.be/Ir93_dVymgg",
  },
  {
    id: 2,
    image: ImageGallery,
    title: "Image Gallery",
    description: `Image Gallery - represents an application which uses unsplash public api to get images. 
    This app provides recent and searched by tag images with an infinite scroll functionality, posibility to download it and vizualize author personal data`,
    url: "https://unsplash-image-gallery.vercel.app",
  },
  {
    id: 3,
    image: Countdown,
    title: "Event countdown",
    description: `Event countdown - is a website countdown used by a discord bot to create some url's for an upcoming event on arknights discord server. 
    App consists of a random background and a live countdown to an event generated by server staff using a discord bot commands.`,
    url: "https://countdown.arknights.moe/Some%20Event/1710427436",
  },

  {
    id: 4,
    image: WeatherApp,
    title: "Weather Forecast",
    description: `Weather Forecast - represents a website which uses weatherbit.io public api to get weather data.
     This application can provide 16 day weather forecast which includes average wind, temperature, precipitation chance of a searched city.`,
    url: "https://weatherforecastzv.netlify.app",
  },
  {
    id: 5,
    image: FinalProject,
    title: "Bottega Course Project",
    description: `Programming News - Represents my final project for bottega coding course. It is a news site build with React and SCSS. 
    Includes such npm packages as React-Responsive, React-Carousel, React-Google-Captcha, Moment.js, React-Google-Maps, React-Scroll.`,
    url: "https://react-course-final-project.herokuapp.com/",
  },
  {
    id: 6,
    title: "FantasticFries",
    image: FantasticFries,
    description: `Fantastic Fries - Is one of my first project built at bottega courses that is a multi page, responsive restaurant website that utilizes HTML5, 
    CSS3, Flexbox, CSS Grid, basic animations and a range of front end development techniques.`,
    url: "https://fantasticfries.netlify.com/",
  },
];

export default projects;