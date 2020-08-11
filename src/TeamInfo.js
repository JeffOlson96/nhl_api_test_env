import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
        width: 800,
        transform: "translate(400px, -800px)",
        position: "absolute"
    }
});


export default function SimpleTable(props) {
    console.log(props);
    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell align="right">Division</TableCell>
                    <TableCell align="right">Games Played</TableCell>
                    <TableCell align="right">Wins</TableCell>
                    <TableCell align="right">Losses</TableCell>
                    <TableCell align="right">Overtime Losses</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {/*rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))*/}
                <TableRow>
                    <TableCell>{props.team.name}</TableCell>
                    <TableCell align="right">{props.team.division.name}</TableCell>
                    <TableCell align="center">{props.team.teamStats[0].splits[0].stat.gamesPlayed}</TableCell>
                    <TableCell align="right">{props.team.teamStats[0].splits[0].stat.wins}</TableCell>
                    <TableCell align="right">{props.team.teamStats[0].splits[0].stat.losses}</TableCell>
                    <TableCell align="center">{props.team.teamStats[0].splits[0].stat.ot}</TableCell>
                    <TableCell align="right">{props.team.teamStats[0].splits[0].stat.pts}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}