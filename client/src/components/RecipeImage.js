import React from "react";
import { Link, withRouter } from "react-router-dom";


class recipeImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: this.props.recipes,
            recipe: this.props.recipe,
            imgExt: this.props.imgExt

        };
    }

    render() {
        return (

            <Link to=
                {{
                    pathname: `/recipe/${this.props.recipe.id}`,
                    state: {
                        recipesPlanner: this.props.recipes,
                    },
                }}>
                <img
                    src={
                        "https://spoonacular.com/recipeImages/" +
                        this.props.recipe.id +
                        "-312x231." +
                        this.props.imgExt
                    } alt=""
                />
            </Link>
        )
    }
}

export default recipeImage;