import React from "react";

import "./App.css";
import Main from "./containers/Main/Main";
import Recipe from "./containers/Recipe/Recipe";
import { Switch, Route, withRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";

class App extends React.Component {
  searchHandler = (e) => {
    // if (this.props.search === "") {
    //   this.props.onClearResults();
    // }
    this.props.onSearch(e.target.value);
    const searchResult = this.props.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.props.search)
    );

    if (searchResult) {
      this.props.onSearchResult(searchResult);
      console.log(this.props.search);
    }
  };

  render() {
    if (this.props.search === "") {
      this.props.onClearResults();
    }
    const routes = (
      <Switch>
        <Route path="/:id" component={Recipe} />
        <Route path="/" exact component={Main} />
      </Switch>
    );
    return (
      <div className="App">
        <Layout searchBox={this.searchHandler}>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
    search: state.recipes.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (value) => dispatch(actions.search(value)),
    onSearchResult: (result) => dispatch(actions.searchResult(result)),
    onClearResults: () => dispatch(actions.clearSearchResults()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
