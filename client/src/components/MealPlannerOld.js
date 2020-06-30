import React from "react";
import { Link, withRouter } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

class mealPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.location.state.recipesPlanner.results,
      imgExt: [],
    };
  }

  // componentWillMount() { console.log("******************* ", this.state.recipes) }

  componentDidMount() {
    let imgExt = [];
    for (let i = 0; i < this.state.recipes.length; i++)
    {
      let ext = this.state.recipes[i].image.split(".").pop();
      imgExt.push(ext);
    }
    this.setState({ imgExt: imgExt });
  }


  render() {
    return (
      <div>
        <Container>
          <Box p={5}>
            <div>
              <br />
              <Box p={1}>
                <Typography variant="h4">Your Meal Plan</Typography>
                <hr />
              </Box>
              <br />
              <Grid
                container
                spacing={10}
                // container
                direction="row"
                justify="space-between"
                alignItems="center"
              >

                <Grid container item sm={12} spacing={10}>
                  {" "}
                  {/* this is a row */}
                  <React.Fragment>
                    <Grid item xs={2}>
                      <Paper></Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(248, 183, 53)",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        BREAKFAST
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(248, 183, 53)",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        LUNCH
                       </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Paper
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(248, 183, 53)",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        DINNER
                      </Paper>
                    </Grid>
                  </React.Fragment>
                </Grid>
                <Grid
                  container
                  spacing={10}
                  // container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                </Grid>

                <Grid container item xs={12} spacing={6}>
                  {" "}
                  {/* this is a row */}
                  <React.Fragment>
                    <Grid item xs={2}>
                      <Paper
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(248, 183, 53)",
                          color: "black",
                          textAlign: "center",
                        }}
                      >
                        MONDAY
                      </Paper>
                    </Grid>
                    <Grid item xs={3}>
                      <Link to=
                        {{
                          pathname: `/recipe/${this.state.recipes[0].id}`,
                          state: {
                            recipesPlanner: this.state.recipes,
                          },
                        }}
                      // {this.state.recipes.map((recipe, index) => (
                      //   <div key={index}></div>

                      // ))}

                      >

                        <img
                          src={
                            "https://spoonacular.com/recipeImages/" +
                            this.state.recipes[0].id +
                            "-312x231." +
                            this.state.imgExt[0]
                          } alt=""
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link to={{
                        pathname: `/recipe/${this.state.recipes[1].id}`,
                        state: {
                          recipesPlanner: this.state.recipes,
                        },
                      }}
                      >
                        <img
                          src={
                            "https://spoonacular.com/recipeImages/" +
                            this.state.recipes[1].id +
                            "-312x231." +
                            this.state.imgExt[1]
                          } alt=""
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={3}>
                      <Link to={{
                        pathname: `/recipe/${this.state.recipes[2].id}`,
                        state: {
                          recipesPlanner: this.state.recipes,
                        },
                      }}
                      >
                        <img
                          src={
                            "https://spoonacular.com/recipeImages/" +
                            this.state.recipes[2].id +
                            "-312x231." +
                            this.state.imgExt[2]
                          } alt=""
                        />
                      </Link>
                    </Grid>
                  </React.Fragment>
                </Grid>
              </Grid>
              {/* 2 */}
              <Grid container item xs={12} spacing={10}>
                {" "}
                {/* this is a row */}
                <React.Fragment>
                  <Grid item xs={2}>
                    <Paper
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(248, 183, 53)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      TUESDAY
                      </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[3].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[3].id +
                          "-312x231." +
                          this.state.imgExt[3]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[4].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[4].id +
                          "-312x231." +
                          this.state.imgExt[4]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[5].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[5].id +
                          "-312x231." +
                          this.state.imgExt[5]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                </React.Fragment>
              </Grid>
              <Grid container item xs={12} spacing={10}>
                {" "}
                {/* this is a row */}
                <React.Fragment>
                  <Grid item xs={2}>
                    <Paper
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(248, 183, 53)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      WEDNESDAY
                      </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[6].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[6].id +
                          "-312x231." +
                          this.state.imgExt[6]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[7].id}`,
                      // recipes.map(recipe, recipes)
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[7].id +
                          "-312x231." +
                          this.state.imgExt[7]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[8].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[8].id +
                          "-312x231." +
                          this.state.imgExt[8]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                </React.Fragment>
              </Grid>
              {/*  */}
              <Grid container item xs={12} spacing={10}>
                {" "}
                {/* this is a row */}
                <React.Fragment>
                  <Grid item xs={2}>
                    <Paper
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(248, 183, 53)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      THURSDAY
                      </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[9].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[9].id +
                          "-312x231." +
                          this.state.imgExt[9]
                        } alt=""
                      />
                    </Link>
                  </Grid>

                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[10].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[10].id +
                          "-312x231." +
                          this.state.imgExt[10]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[11].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[11].id +
                          "-312x231." +
                          this.state.imgExt[11]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                </React.Fragment>
              </Grid>
              <Grid container item xs={12} spacing={10}>
                {" "}
                {/* this is a row */}
                <React.Fragment>
                  <Grid item xs={2}>
                    <Paper
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(248, 183, 53)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      FRIDAY
                       </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[12].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[12].id +
                          "-312x231." +
                          this.state.imgExt[12]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[13].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[13].id +
                          "-312x231." +
                          this.state.imgExt[13]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[14].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[14].id +
                          "-312x231." +
                          this.state.imgExt[14]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                </React.Fragment>
              </Grid>

              <Grid container item xs={12} spacing={10}>
                {" "}
                {/* this is a row */}
                <React.Fragment>
                  <Grid item xs={2}>
                    <Paper
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(248, 183, 53)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      SATURDAY
                      </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[15].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[15].id +
                          "-312x231." +
                          this.state.imgExt[15]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[16].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[16].id +
                          "-312x231." +
                          this.state.imgExt[16]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[17].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[17].id +
                          "-312x231." +
                          this.state.imgExt[17]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                </React.Fragment>
              </Grid>
              <Grid container item xs={12} spacing={10}>
                {" "}
                {/* this is a row */}
                <React.Fragment>
                  <Grid item xs={2}>
                    <Paper
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(248, 183, 53)",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      SUNDAY
                      </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[18].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[18].id +
                          "-312x231." +
                          this.state.imgExt[18]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[19].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[19].id +
                          "-312x231." +
                          this.state.imgExt[19]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={{
                      pathname: `/recipe/${this.state.recipes[20].id}`,
                      state: {
                        recipesPlanner: this.state.recipes,
                      },
                    }}
                    >
                      <img
                        src={
                          "https://spoonacular.com/recipeImages/" +
                          this.state.recipes[20].id +
                          "-312x231." +
                          this.state.imgExt[20]
                        } alt=""
                      />
                    </Link>
                  </Grid>
                </React.Fragment>
              </Grid>
            </div>
          </Box>
        </Container>
      </div >
    );
  }
}

export default withRouter(mealPlanner);