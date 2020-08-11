import React, { Component } from 'react';
import * as d3 from 'd3';



export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
        this.drawChart = this.drawChart.bind(this);
    }

    componentDidMount() {
        this.setState((props) => ({data: this.props.data}));
        this.drawChart(this.props.data);
    }

    componentDidUpdate(prevProps) {
        //console.log(prevProps, this.props);
        if (prevProps.data !== this.props.data) {
          
          this.setState((props) => ({ data: this.props.data }));
          d3.selectAll(".bar").remove();
          this.drawChart(this.props.data);
        }
    }


    drawChart(data) {
        //console.log(data);
        var multiplyFactor = 1.0;
        var scope = this;
        var margin = 50;

        const svg = d3.select("#bar")
                    .append("svg")
                    .attr("class", "bar")
                    .attr("width", 800)
                    .attr("height", 800);
        
        var x = d3.scaleBand()
                .range([0, 1000])
                .domain(data.map(function(d) {
                    if (d.key) {
                        return d.key;
                    }
                }))
                .padding(0.5);

        var y = d3.scaleLinear().range([0, 200]).domain(data.map(function(d) { return d.key }));

        var color = d3.scaleOrdinal().domain(data).range(d3.schemeSet2);

        var bars = svg.selectAll('.bars').data(data).enter().append('g');

        bars.append("rect")
                .attr("y", (d,i) => (i * 15) + margin)
                .attr("x", (d,i) => {
                    //console.log(d);
                    return (150 /*- (d.value * multiplyFactor)*/);
                })
                .attr("height", 10)
                .attr("width", (d,i) => {
                    return d.value;
                })
                .attr("fill", function(d) {
                    return color(d.key)
                })
                .on("click", function(d) {
                    //console.log(d);
                    scope.props.handleClick(d);
                })
        
        bars.append("text")
                .attr("class", "label")
                .text((d) => {
                    return d.key;
                })
                .attr("font-size", "8px")
                .attr("transform", (d,i) => {
                    return "translate( " + (50) + "," + (((i * 15) + 9) + margin) + ")";
                });
        
        bars.append("text")
                .attr("class", "value")
                .text((d) => {
                    return d.value;
                })
                .attr("y", (d, i) => ((i * 15) + 10) + margin)
                .attr("x", (d,i) => {
                    return (155 + (d.value * multiplyFactor));
                })
                .attr("font-size", "8px");
        
        //bars.append("text")
        svg.attr("transform", "translate(100, 0)");
        
    }

    render() {
        return(
            <div className="bar"></div>
        )
    }

}