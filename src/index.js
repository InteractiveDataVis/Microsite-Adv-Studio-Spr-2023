import { select, csv, autoType, ascending } from "d3";
import { Animation } from "./components/Animation";
import { Title } from "./components/Title";
import { StudentList } from "./components/StudentList";
import { Content } from "./components/Content";

import "./style.scss";
import "./media_styles.scss";

import { appConfig, keys } from "./utils/constants";
const { titleDelay } = appConfig;
const { name } = keys;

class Controller {
  state = {
    selectedStudent: null,
    isAnimating: true,
    data: [],
  };

  constructor() {
    select("body").append("div").attr("id", "grid");

    this.animation = new Animation();
    this.animation.startAnimation();

    csv("public/siteData.csv", autoType).then((data) => {
      // sort by last name alphabetically
      this.data = data //.sort((a, b) => ascending(a[name].split(" ")[1], b[name].split(" ")[1]));
      this.init();
    });

    this.handleScroll = this.handleScroll.bind(this);
  }

  init() {
    // set it so window scrolls to top when reset
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    this.title = new Title();
    this.studentList = new StudentList(this.data);
    this.content = new Content(this.data);
    // to switch the title to fixed header on scroll
    // observe when bottom content section comes into screen
    this.observer = new IntersectionObserver(this.handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: [0.05],
    });
    this.observer.observe(this.content.node);

    // fade in the title and student list
    setTimeout(() => {
      this.title.makeVisible();
      this.studentList.makeVisible();
    }, titleDelay);

    // add resize handler
    window.addEventListener("resize", () => this.resize());
  }

  handleScroll(entries) {
    if (entries[0].isIntersecting) {
      this.title.makeFixed();
    } else this.title.makeUnFixed();
  }

  resize() {
    this.animation.resize();
  }
}

new Controller();
