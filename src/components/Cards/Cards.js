import React from "react";
import { Grid } from "@material-ui/core";

import Card from "./Card/Card";
import classes from "./Cards.module.css";

const cards = (props) => {
  return (
    <React.Fragment>
      {props.recipes.map((recipe) => {
        const readyInTime = recipe.cookingTime + recipe.preparationTime + "min";
        return (
          <Grid item>
            <Card
              key={recipe.id}
              recipeName={recipe.name}
              recipeReadyInTime={readyInTime}
              makeItBtn={props.makeItBtn}
              id={recipe.id}
              picture={recipe.picture}
            />
          </Grid>
        );
      })}
    </React.Fragment>
    // <Grid item xs={10} container className={classes.Cards}>

    // </Grid>
  );
};

export default cards;
