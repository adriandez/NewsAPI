import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import ListNews from "../../pages/ListNews";
import "./Main.css";

const Main = () => {
const [formData, setFormData] = useState();
    return (
      <main className="Main">
        <div className="wrapper">
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/form"
              component={() => <Form setFormData={setFormData} />}
            />
            <Route
              path="/list"
              component={() => <ListNews formData={formData} />}
            />
          </Switch>
        </div>
      </main>
    );
  }

export default Main;