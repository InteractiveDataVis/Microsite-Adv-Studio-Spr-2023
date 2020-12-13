import { max, scaleLinear, scaleLog, scaleSqrt, select } from "d3";
import { animationConfig } from "../utils/constants";

const { getWidth, getHeight, cellSize, gridCnt } = animationConfig;

export class Animation {
  width = getWidth();
  height = getHeight();


  constructor() {
    this.canvas = select("#grid")
      .append("canvas")
      .attr("id", "animation")
      .attr("width", this.width)
      .attr("height", this.height);

    this.ctx = this.canvas.node().getContext("2d");
    this.maxDim = max([this.width, this.height]);
    this.draw();
  }

  draw(e = { x: this.width / 2, y: this.height / 2 }) {
    const { x, y } = e; // d3 event object
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.width, this.height); // clear canvas
    this.ctx.globalAlpha = .4;
    // draw grid
    const gridSize = this.maxDim / gridCnt;
    const opacityScale = scaleLinear()
      .domain([0, this.maxDim / 5])
      .range([.4, .9])
      .clamp(true);


    for (var gridY = 0; gridY < this.height; gridY += gridSize) {
      for (var gridX = 0; gridX < this.width; gridX += gridSize) {
        const dist = Math.sqrt(((gridX - x) ** 2) + ((gridY - y) ** 2))
        // const diameter = sizeScale(dist);
        this.ctx.save();
        this.ctx.translate(gridX, gridY);
        this.ctx.strokeStyle = '#03738C';
        this.ctx.fillStyle = '#03738C';
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = opacityScale(dist);
        this.ctx.fillRect(0, 0, gridSize, gridSize);
        this.ctx.restore();

      }
    }

  }

  resize() {
    this.width = getWidth();
    this.height = getHeight();
    // reset on resize
    this.canvas.attr("width", this.width).attr("height", this.height);
    this.ctx = this.canvas.node().getContext("2d");
    this.draw();
  }

  startAnimation() {
    // note: doing `()=> this.function` maintains the proper scoping for the method
    // so that it has access to the object as `this`
    window.addEventListener('mousemove', (e) => this.draw(e))
  }

  stopAnimation() {
    // clearInterval(this.intervalId);
  }
}
