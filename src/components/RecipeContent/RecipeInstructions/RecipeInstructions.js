import React from "react";

import { Grid } from "@material-ui/core";

const recipeInstructions = (props) => {
  return (
    <div>
      <h2>Directions</h2>
      <ul>
        {props.instructions ? (
          props.instructions.map((instruction, index) => {
            return (
              <li>
                Step {index + 1}: {instruction}
              </li>
            );
          })
        ) : (
          <h5>Not available</h5>
        )}
      </ul>
    </div>
  );
};

export default recipeInstructions;
