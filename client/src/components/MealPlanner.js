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


let createRow = (day, weekDay, meals) => {
    return { day, weekDay, meals };
}

let rows = [];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealType = ["Breakfast", "Lunch", "Dinner"];

const MealPlanner = (props) => {
    const [isLoading, setLoading] = useState(true);
    const classes = useStyles();
    let { mealPlan } = props.location.state;
    // console.log(mealPlan)

    let generateRows = () => {
        for (let i = 0; i < weekDays.length; i++)
        {
            let dayPlan = mealPlan.filter(meal => (meal.day === i + 1));
            let meals = [];
            for (let s = 1; s <= 3; s++)
            {
                let meal = JSON.parse(dayPlan.find(meal => meal.slot === s).value);
                meal.slot = s;
                meals.push(meal);
            }
            console.log("meals array");
            console.log(meals)

            // let breakfastCell = {};
            // breakfastCell.title = breakfast.title;
            // breakfastCell.src = "https://spoonacular.com/recipeImages/" +
            //     breakfast.id +
            //     "-312x231." +
            //     breakfast.imageType;
            // breakfastCell.pathname = `/recipe/${breakfast.id}`;

            rows.push(createRow(i + 1, weekDays[i], meals));


        }
        console.log(rows)
    }

    useEffect(() => { generateRows() }, [mealPlan]);
    useEffect(() => { setLoading(false) }, [rows]);

    return (
        isLoading ? <div>"NO DATA"</div> :
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            {mealType.map((type, index) => (
                                <TableCell style={{ width: "28%" }} key={index} align="center">{type}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.weekDay}>
                                <TableCell align="center" component="th" scope="row">
                                    {row.weekDay}
                                </TableCell>
                                {row.meals.map((meal, index) =>
                                    <TableCell align="center" style={{ width: "20%" }} key={index}>
                                        <RecipeImage recipe={meal}></RecipeImage>
                                    </TableCell>
                                )
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}

export default withRouter(MealPlanner);