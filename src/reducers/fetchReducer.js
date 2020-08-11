const initState = {
    playerData: [],
    teamData: [],
    teamRosters: null,
    error: null,
    pending: null
}


const reducer = (state = initState, action) => {
    
    switch(action.type) {
        case "FETCH_DATA_PENDING":
            return {...state, pending: true}
        case "FETCH_PLAYERDATA_SUCCESS":
            return {...state, playerData: action.playerData, pending: false}
        case "FETCH_TEAMDATA_SUCCESS":
            return {...state, teamData: action.teamData, pending: false}
        case "FETCH_TEAMROSTERS_SUCCESS":
            return {...state, teamRosters: action.teamRosters, pending: false}
        default:
            return state;
    }
}

export default reducer;