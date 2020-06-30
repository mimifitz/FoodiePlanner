import React from "react";
import { Link, withRouter } from "react-router-dom";


class recipeImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: this.props.recipes,
            recipe: this.props.recipe,
        };
    }

    // componentDidMount() {

    //     console.log("MY PROPS")
    //     console.log(this.props)
    // }

    render() {
        return (
            <React.Fragment>
                {this.props.recipe.title}
                <br></br>
                <Link to=
                    {{
                        pathname: `/recipe/${this.props.recipe.id}`,
                        state: {
                            recipesPlanner: this.state.recipes,
                        },
                    }}>
                    <img align="center" width="240" height="150"
                        src={
                            "https://spoonacular.com/recipeImages/" +
                            this.props.recipe.id +
                            "-240x150.jpg"
                        } alt=""
                    />
                </Link>
            </React.Fragment>
        )
    }
}

export default recipeImage;