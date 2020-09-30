import React from "react";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";

const header = (props) => {
  return (
    <AppBar>
      <Toolbar className={classes.Header}>
        <IconButton>=</IconButton>
        <NavLink to="/" className={classes.HomeButton}>
          <Typography className={classes.Heading} variant="h5">
            My-Recipes
          </Typography>
        </NavLink>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            className={classes.input}
            onChange={props.searchBox}
          />
        </div>
        {/* <Typography variant="h5">Search</Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default header;
