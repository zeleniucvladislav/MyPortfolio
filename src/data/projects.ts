import FinalProject from "../assets/images/projects/finalProject.jpg";
import FantasticFries from "../assets/images/projects/fantasticFries.jpg";
import Dashboard from "../assets/images/projects/dashboard.jpg";
import WeatherApp from "../assets/images/projects/weather.jpg";

import projectType from "../types/projectsType";

const projects: projectType[] = [
  {
    id: 0,
    image: WeatherApp,
    title: "Weather Forecast",
    description:
      "Weather Forecast app  - represents a web application which uses weatherbit.io public api to get weather data.This application can provide 16 day weather forecast which includes average wind,temperature,precipitation chance of a searched city.Also this application provides current air quality providing air quality index, tree and grass pollen level etc.",
    url: "https://weatherforecastzv.netlify.app",
  },
  {
    id: 1,
    image: Dashboard,
    title: "Discord Dashboard",
    description:
      "Discord Dashboard - represents a web application which is used to access and manipulate discord channel data.Also dashboard provides form applying and reviewing process.Technologies used to create this project was React,Redux,Highcharts",
    url: "https://www.youtube.com/watch?v=6GydFlcKaqM&feature=youtu.be",
  },
  {
    id: 2,
    image: FinalProject,
    title: "Bottega Course Project",
    description:
      "Programming News – A news application build with React,SCSS and Node.js.Includes such npm packages as React-Responsive,React-Carousel,React-Google-Captcha,Moment.js,React-Google-Maps,React-Scroll etc.",
    url: "https://react-course-final-project.herokuapp.com/",
  },
  {
    id: 3,
    title: "FantasticFries",
    image: FantasticFries,
    description:
      "Fantastic Fries-A multi page,responsive restaurant website that utilizes HTML5, CSS3, Flexbox, CSS Grid, Animations,media queries, custom forms, responsive images, and a range of front end development techniques.",
    url: "https://fantasticfries.netlify.com/",
  },
];

export default projects;
