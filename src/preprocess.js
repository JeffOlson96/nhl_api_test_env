import * as d3 from 'd3';


export default function preprocess(data, teamRoster) {
    //console.log(teamRoster);
    // preprocessing, more can be added
    var year = 2010;


    var names = new Set(data[data.length-1].teams.map(d => d.name));
    //console.log(names);
    data.forEach((season, idx) => {
        //console.log(idx)
        var curSeason = teamRoster[idx];
        //console.log(curSeason);
        season.year = `${year}${year+1}`;
        year+=1;
        
        
        var tmp = d3.nest()
                .key(function(d) {
                    //console.log(d);
                    return d.name;
                })
                .rollup(function(d) {
                    return d3.sum(d, function(v) {
                        return v.teamStats[0].splits[0].stat.pts;
                    })
                })
                .entries(season.teams);
        

        tmp.sort((a,b) => b.value - a.value);
        season.pts_values = tmp;
        
        season.teams.forEach((team) => {
            var find_team = curSeason.teams.find((d) => d.name === team.name);
            team.roster = find_team.roster.roster;
        });
        //console.log(season);
        
    });
    //console.log(data);
    return data;
} 