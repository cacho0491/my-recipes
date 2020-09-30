import React from "react";

import { Card, Grid } from "@material-ui/core";
import RecipeInformation from "./RecipeInformation/RecipeInformation";
import RecipePhoto from "./RecipePhoto/RecipePhoto";

import classes from "./RecipeContent.module.css";

const recipeContent = (props) => {
  return (
    <React.Fragment>
      <Grid item xs={8}>
        <Card>
          <RecipePhoto picture={props.picture} />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <RecipeInformation
          prepTime={props.prepTime}
          cookTime={props.cookTime}
          servings={props.servings}
        />
      </Grid>
    </React.Fragment>
  );
};

export default recipeContent;
