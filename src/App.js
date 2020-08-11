import React, { Component } from 'react';
import './App.css';
import SunburstComp from './d3_components/SunburstComp';
import preprocess from './preprocess.js';
import DiscreteSlider from './DiscreteSlider';
import BarChart from './d3_components/BarChart';
import * as d3 from 'd3';
import TeamInfo from './TeamInfo';
import getTeamData from "./actions/teamStatsfetch";
import getTeamRoster from "./actions/teamRosterfetch";


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
      teamStats: null,
      seasonData: [],
      season_to_present: null,
      canRender: false,
      popup_team: null,
      teamRoster: null
    };

    this.handleSliderValue = this.handleSliderValue.bind(this);
    this.handleBarClick = this.handleBarClick.bind(this);
  }

  componentDidMount() {
    var promise = getTeamData();

    promise.then((value) => {
      this.setState({seasonData: value});
    });

    
    var rosterPromise = getTeamRoster();

    rosterPromise.then((value) => {
      this.setState({teamRoster: value});
    });

    

  }

  componentDidUpdate() {
    //console.log(this.state);
    if (this.state.seasonData && this.state.teamRoster) {
      //console.log(this.state);
      //this.setState({data: preprocess(this.state.seasonData, this.state.teamRoster), canRender: true});
      if (this.state.data !== preprocess(this.state.seasonData, this.state.teamRoster)) {
        this.setState({data: preprocess(this.state.seasonData, this.state.teamRoster), canRender: true});
      }
    }
    /*
    if ( this.state.seasonData.length >= 0 ) {
      const checkData = this.state.seasonData.length;
      if (checkData === 9) {
        //console.log("length");
        if (this.state.data !== preprocess(this.state.seasonData)) {
          this.setState({data: preprocess(this.state.seasonData), canRender: true});
        }
      }
    }
    */
  }

  handleBarClick = (team) => {
    var popup_team = this.state.season_to_present.teams.find((d) => d.name === team.key)
    //console.log(popup_team);
    // window.setTimeout(function(d){console.log("timeout")}, 1000);
    this.setState({popup_team: popup_team});
  };


  handleSliderValue = (event, value) => {
    let seasonNum = `${value}${value+1}`;
    var season = this.state.data.find((d) => d.year === seasonNum);
    //console.log(season);
    this.setState({season_to_present: season});
  };

  render() {
    //console.log(this.state);
    const slider_style = {
      transform: "translateX(100px)",
      width: "300px"
    }
    const pop_style = {
      transform: "translateY(-100px)",
      width: "600px"
    }
    //console.log(this.state.season_to_present);
    return(
      <div>
        {this.state.canRender ?
          <div className="App" style={slider_style}>
          <h3>Each Team by Points</h3>
            <DiscreteSlider 
              handleSliderChange={this.handleSliderValue}
            />
            {/* console.log(dataSend) */}
            { this.state.season_to_present ?
                <div id="container">
                  <div id="bar">
                    <BarChart
                      data={this.state.season_to_present.pts_values}
                      handleClick={this.handleBarClick}
                    />
                  </div>
                  <div id="popup">
                    {this.state.popup_team ?
                      <TeamInfo
                        team={this.state.popup_team}
                      />
                      : null
                    }
                  </div>
                </div>
                : null
            }
          </div>
          : "Loading..."
        }
      </div>
    );
  }
}


