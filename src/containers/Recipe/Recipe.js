import React, { Component } from "react";

import classes from "./Recipe.module.css";
import { Grid, Paper } from "@material-ui/core";
import RecipeContent from "../../components/RecipeContent/RecipeContent";
import RecipeInstructions from "../../components/RecipeContent/RecipeInstructions/RecipeInstructions";
import RecipeIngredients from "../../components/RecipeContent/RecipeIngredients/RecipeIngredients";
import { connect } from "react-redux";

class Recipe extends Component {
  state = {
    recipe: null,
  };
  componentDidMount() {
    const recipeId = Number(this.props.match.params.id);
    const recipe = this.props.recipes.find((r) => r.id === recipeId);
    this.setState({ recipe: recipe });
  }

  render() {
    console.log(this.state.recipe);
    let recipe = null;
    if (this.state.recipe) {
      recipe = (
        <Grid container className={classes.Recipe} direction="column">
          <Grid item xs={12}>
            <h2>{this.state.recipe.name}</h2>
          </Grid>
          <Grid item container xs={10}>
            <RecipeContent
              prepTime={this.state.recipe.preparationTime}
              cookTime={this.state.recipe.cookingTime}
              ingredients={this.state.recipe.ingredients}
              picture={this.state.recipe.picture}
              servings={this.state.recipe.servings}
            />
          </Grid>

          <Grid item xs={2}>
            <RecipeIngredients ingredients={this.state.recipe.ingredients} />
          </Grid>

          <Grid item xs={10}>
            <RecipeInstructions instructions={this.state.recipe.instructions} />
          </Grid>
        </Grid>
      );
    }

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.Recipe}
        xs={12}
        spacing={7}
      >
        {recipe}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps)(Recipe);
