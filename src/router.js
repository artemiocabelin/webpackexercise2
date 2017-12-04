import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import asyncComponent from "./components/asyncComponent";
import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

const AsyncArtistDetail = asyncComponent(() => import("./components/artists/ArtistDetail"));
const AsyncArtistCreate = asyncComponent(() => import("./components/artists/ArtistCreate"));
const AsyncArtistEdit = asyncComponent(() => import("./components/artists/ArtistEdit"));


const Routes = ({childProps}) => {
  return (
    <Router history={hashHistory} >
      <Route path="/" component={Home}>
        <IndexRoute component={ArtistMain} />
        <Route path="artists/new" exact component={AsyncArtistCreate} props={childProps} />
        <Route path="artists/:id" exact component={AsyncArtistDetail} props={childProps} />
        <Route path="artists/:id/edit" exact component={AsyncArtistEdit} props={childProps} />
      </Route>
    </Router>
  );
};

export default Routes;
