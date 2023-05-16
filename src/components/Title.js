import { select } from 'd3';

export class Title {
  constructor() {
    this.el = select('#grid').append('div').attr('id', 'page-title').classed('visible', false);

    this.el.append('div').attr('class', 'showcase').text('Project Showcase');

    this.el
      .append('div')
      .attr('class', 'title')
      .text('Advanced Interactive Data Visualization Studio')
      .on('click', this.scrollToTop);

    const subtitleWrapper = this.el.append('div').attr('class', 'subtitleWrapper');

    subtitleWrapper.append('div').attr('class', 'subtitle').text('Spring 2023');
    subtitleWrapper.append('div').attr('class', 'subtitle').text('CUNY Graduate Center');
    subtitleWrapper
      .append('div')
      .attr('class', 'subtitle')
      .html(
        `<a href="https://gc.cuny.edu/Page-Elements/Academics-Research-Centers-Initiatives/Masters-Programs/Data-Analysis-and-Visualization">M.S. Data Analysis and Visualization</a>`,
      );
    subtitleWrapper
      .append('div')
      .attr('class', 'subtitle')
      .html(`<a href="#page-credits">Course Description</a>`);
  }

  scrollToTop() {
    select(`body`).node().scrollIntoView({ behavior: 'smooth' });
  }

  makeVisible() {
    this.el.classed('visible', true);
  }

  makeHidden() {
    this.el.classed('visible', false);
  }

  makeFixed() {
    this.el.classed('fixed', true);
  }

  makeUnFixed() {
    this.el.classed('fixed', false);
  }
}
