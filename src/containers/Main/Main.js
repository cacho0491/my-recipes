import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";

import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import classes from "./Main.module.css";
import Pagination from "../../components/UI/Pagination/Pagination";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";

class Main extends Component {
  makeItHandler = (e) => {
    const recipeIdSelected = e.target.parentNode.id;
    this.props.history.push("/" + recipeIdSelected);
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.MainContent}
      >
        <Grid item xs={12} justify="center">
          <Typography variant="h1">Welcome</Typography>
        </Grid>

        {/* <Grid item xs={12}>
          <Header />
        </Grid> */}
        <Grid item container xs={12} justify="space-evenly">
          <Cards
            recipes={
              this.props.searchResults
                ? this.props.searchResults
                : this.props.recipes
            }
            makeItBtn={(e) => this.makeItHandler(e)}
          />
        </Grid>
        {/* <Grid item>
          <Pagination />
        </Grid> */}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    searchResults: state.recipes.searchResult,
  };
};

export default connect(mapStateToProps)(Main);
