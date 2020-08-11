import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';


function valuetext(value) {
    return `${value}`;
}

export default class DiscreteSlider extends Component {
    //console.log(props);
    //const classes = useStyles();
    render() {
        return (
            <div className="slider" width="50px">
                <Typography id="discrete-slider" gutterBottom>
                    Season
                </Typography>
                <Slider 
                    defaultValue={2011}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={2010}
                    max={2018}
                    onChangeCommitted={this.props.handleSliderChange}
                />
            </div>
        );
    }
}