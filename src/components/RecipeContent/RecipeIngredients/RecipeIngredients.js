import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { Done } from "@material-ui/icons";

const recipeIngredients = (props) => {
  let ingredients = null;
  if (props.ingredients) {
    console.log(props.ingredients);
    ingredients = props.ingredients.map((ingredient) => {
      console.log(ingredient);
      return (
        <Grid item container xs={12} spacing={1} alignItems="center">
          <Grid item>
            <Done />
          </Grid>
          <Grid item>{ingredient.ingredientName}</Grid>
        </Grid>
      );
    });
  }

  return (
    <Grid container direction="column">
      <Typography variant="h6">Ingredients</Typography>
      {ingredients}
    </Grid>
  );
};

export default recipeIngredients;
