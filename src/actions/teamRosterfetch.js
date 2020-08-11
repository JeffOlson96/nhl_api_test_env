export default async function getTeamStats() {
    var RosterData;
    await Promise.all([
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20102011`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20112012`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20122013`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20132014`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20142015`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20152016`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20162017`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20172018`).then(res => res.json()),
        fetch(`https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&season=20182019`).then(res => res.json())
    ])
    .then((values) => {
        //console.log(values);
        RosterData = values;
    })

    return RosterData;
}