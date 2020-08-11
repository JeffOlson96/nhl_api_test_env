export default async function getTeamData() {
    var seasonData;
    await Promise.all([
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20102011`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20112012`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20122013`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20132014`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20142015`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20152016`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20162017`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20172018`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats&season=20182019`).then(res => res.json())
    ])
    .then((values) => {
        //console.log(values);
        seasonData = values;
    })
    
    //console.log(seasonData);
    return seasonData;
}