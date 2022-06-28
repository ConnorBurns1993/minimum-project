import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import ArticleList from "./components/ArticlesList";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import AddArticleForm from "./components/AddArticleForm";
import EditArticleForm from "./components/EditArticleForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // useEffect(() => {
  //   history.listen((location) => {
  //     console.log(location.pathname);
  //   });
  // });

  const home = history.listen((location) => {
    if (location.pathname === "/") return true;
    else return false;
  });

  return (
    <>
      {home && <Navigation isLoaded={isLoaded} />}
      <Navigation2 isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/articles" exact>
            <ArticleList />
          </Route>
          <Route path="/articles/new" exact>
            <AddArticleForm />
          </Route>
          <Route path="/articles/:articleId" exact>
            <SingleArticle />
          </Route>
          <Route path="/articles/:articleId/edit" exact>
            <EditArticleForm />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
