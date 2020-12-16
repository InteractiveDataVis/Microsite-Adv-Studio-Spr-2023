export const getRandom = (min = -1, max = 1) =>
  Math.random() * (max - min) + min;

export const keys = {
  name: "name",
  desc: "description",
  github: "github",
  portfolio: "portfolioLink",
  title: "portfolioTitle",
  prevImg1: "img1",
  prevImg2: "img2",
};

export const appConfig = {
  titleDelay: 2500,
  getHash: (str) => str.toLowerCase().split(" ").join("_").split(",").join("_"),
};

appConfig.makeImgPath = (name, key) =>
  `./public/images/${appConfig.getHash(name)}_${key}.png`;

export const animationConfig = {
  getWidth: () => window.innerWidth,
  getHeight: () => window.innerHeight,
  gridCnt: 40,
  cellSize: 30,
};

export const listConfig = {
  delay: 75,
};

export const courseDescription = [
  'This course will offer students the opportunity to develop a professional level data visualization project of their choice. This course will be a supervised studio-style class, with the goal of helping students push forward their own design and development practice — as such, the course will support students through the process of concept development, design iteration, technical implementation, critique, and refinement. Students will pursue their individual interests while working in the context of a hands-on studio environment where they will interact and share ideas with peers.  The expectation is that students are motivated and prepared to develop their own project and goals.',
  'A portion of the semester will also consist of a series of advanced technical workshops. The topics of these workshops will be informed by the tools students need in order to push their work forward. As such, this class will be both technically and conceptually challenging. It is strongly recommended that students complete ‘Interactive Data Visualization’ prior to taking this course, or have comparable experience with Javascript, HTML, and CSS. Ultimately, the goal is for each student to finish the semester with a professional level project they feel proud of.',
  'Course and microsite developed by <strong><a href="http://aucherserr.com/">Aucher Serr</a></strong>.'

]