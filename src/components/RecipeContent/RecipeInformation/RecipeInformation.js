import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { Timer, AlarmOn, LocalDining } from "@material-ui/icons";
import classes from "./RecipeInformation.module.css";

const recipeInformation = (props) => {
  return (
    <Grid direction="column" container className={classes.RecipeInformation}>
      <Typography variant="h6">Information</Typography>
      <Grid item container xs={12} spacing={1} alignItems="center">
        <Grid item>
          <Timer />
        </Grid>
        <Grid item>Preparation: {props.prepTime}</Grid>
      </Grid>
      <Grid item container xs={12} spacing={1} alignItems="center">
        <Grid item>
          <AlarmOn />
        </Grid>
        <Grid item>Cooking time: {props.cookTime}</Grid>
      </Grid>
      <Grid item container xs={12} spacing={1} alignItems="center">
        <Grid item>
          <LocalDining />
        </Grid>
        <Grid item>Servings: {props.servings}</Grid>
      </Grid>
    </Grid>
  );
};

export default recipeInformation;
