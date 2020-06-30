import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import RecipeImage from "./RecipeImage"
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import compose from 'recompose/compose';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


let createRow = (day, weekDay, breakfast, lunch, dinner) => {
    return { day, weekDay, breakfast, lunch, dinner };
}

let rows = [];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealType = ["Breakfast", "Lunch", "Dinner"];

const MealPlanner = (props) => {
    const [isLoading, setLoaing] = useState(true);
    const classes = useStyles();
    let { mealPlan } = props.location.state;
    let generateRows = () => {
        for (let i = 0; i < weekDays.length; i++)
        {

            let dayPlan = mealPlan.filter(meal => (meal.day === i + 1))
            for (let j = 0; j < mealType.length; j++)
            {
                rows.push(createRow(i + 1, weekDays[i], dayPlan));

            }


        }
        console.log(rows)
    }

    useEffect(() => { generateRows() }, [mealPlan]);
    useEffect(() => { setLoaing(false) }, [rows]);

    return (
        isLoading ? <div>"NO DATA"</div> :
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Breakfast</TableCell>
                            <TableCell align="center">Lunch</TableCell>
                            <TableCell align="center">Dinner</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.weekDay}>
                                <TableCell component="th" scope="row">
                                    {row.weekDay}
                                </TableCell>
                                <TableCell align="right"><Link to={{
                                    // pathname: `/recipe/${id}`,
                                    pathname: `/recipe/149251`,
                                }}
                                >
                                    <img
                                        src={
                                            "https://spoonacular.com/recipeImages/149251-312x231.jpg"
                                        } alt=""
                                    />
                                </Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default withRouter(MealPlanner);