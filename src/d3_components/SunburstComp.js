import React, { Component } from 'react';
import * as d3 from 'd3';




export default class Sunburst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      teams: null
    };
    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount(props) {
    this.setState((props) => ({ data: this.props.data, teams: this.props.team_stats }));
    this.drawChart(this.props.team_stats);
  }

  drawChart(data) {
    console.log(data);
    const height = 598;
    const width = 300;
    const barSize = 48;
    const margin = { top: 16, right: 6, bottom: 6, left:0 };
    const n = 12;

    const y = d3.scaleBand()
                .domain(d3.range(n+1))
                .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
                .padding(0.1)

    const x = d3.scaleLinear([0,1], [margin.left, width - margin.right])
    
    /*
    const color = () => {
      const scale = d3.scaleOrdinal(d3.schemeTableau10);
      if (data.some(d => d.category !== undefined)) {
        
      }
    }
    */
    
  }

  render() {
    return (<div className="sunrise"></div>);
  }
}