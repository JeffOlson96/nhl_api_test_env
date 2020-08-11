import getTeamData from "./teamStatsfetch";
import getTeamRoster from './teamRosterfetch';

export const fetchTeamData = () => {
    return (dispatch) => {
        return getTeamData
                .then((value) => dispatch(
                    {type: "FETCH_TEAMDATA_SUCCESS", teamData: value}))
                .catch(err => dispatch(
                    {type: "ERROR", msg: "Unable to fetch"}
                ))    
    }
}

export const fetchTeamRoster = () => {
    return (dispatch) => {
        return getTeamRoster
                .then((value) => dispatch(
                    {type: "FETCH_TEAMROSTER_SUCCESS", teamRosters: value}))
                .catch(err => dispatch(
                    {type: "ERROR", msg: "Unable to fetch"}))
    }
}

