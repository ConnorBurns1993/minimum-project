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

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Navigation isLoaded={isLoaded} />
            <Home />
          </Route>
          <Route path="/articles" exact>
            <Navigation2 isLoaded={isLoaded} />
            <ArticleList />
          </Route>
          <Route path="/articles/new" exact>
            <Navigation2 isLoaded={isLoaded} />
            <AddArticleForm />
          </Route>
          <Route path="/articles/:articleId" exact>
            <Navigation2 isLoaded={isLoaded} />
            <SingleArticle />
          </Route>
          <Route path="/articles/:articleId/edit" exact>
            <Navigation2 isLoaded={isLoaded} />
            <EditArticleForm />
          </Route>
          <Route>
            <Navigation2 isLoaded={isLoaded} />
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
