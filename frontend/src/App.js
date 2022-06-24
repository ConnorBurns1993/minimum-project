import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticlesList";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import AddArticleForm from "./components/AddArticleForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
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
        </Switch>
      )}
    </>
  );
}

export default App;
