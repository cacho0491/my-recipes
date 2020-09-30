import React from "react";

import { CardMedia } from "@material-ui/core";

const recipePhoto = (props) => {
  return (
    <CardMedia
      component="img"
      alt="bolognese"
      height="260"
      image={props.picture}
    />
  );
};

export default recipePhoto;
