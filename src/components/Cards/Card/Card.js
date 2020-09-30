import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Timer } from "@material-ui/icons";
import classes from "./Card.module.css";
import bolognese from "../../../assets/bolognese.jpg";

const card = (props) => {
  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="bolognese"
          height="140"
          image={props.picture}
        />
        <CardContent>
          <Typography variant="h5">{props.recipeName}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-between">
          <Grid item xs={4}>
            <Button
              color="primary"
              variant="contained"
              onClick={props.makeItBtn}
              id={props.id}
            >
              Make it
            </Button>
          </Grid>

          <Grid item container xs={8} justify="flex-end" alignItems="center">
            <IconButton color="primary">
              <Timer />
            </IconButton>
            <Typography variant="h6">{props.recipeReadyInTime}</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default card;
