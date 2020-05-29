import React from "react";
import { Layout } from "../../layout";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "../../container/home";
import { Todos } from "../../container/todos";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
};

export { App };
