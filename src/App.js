import React, { useEffect } from "react";
import { Login } from "./features/user/Login";
import "antd/dist/antd.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Space, Typography } from "antd";
import "./App.css";
import { selectUser, meAsync } from "./features/user/userSlice";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "./app/Home";
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./app/ProtectedRoute";
import { Comptoir } from "./features/comptoir/Comptoir";
import { Signup } from "./features/user/Signup";

const { Title } = Typography;

function App() {
  const { me, redirect } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meAsync());
  }, [dispatch]);

  return (
    <Layout className="App">
      <Header>
        <Space>
          <Title level={2}>DigiSocial</Title>
          <Title level={4}>{process.env.NODE_ENV}</Title>
        </Space>
      </Header>

      <BrowserRouter>
        <Content>
          {me ? <Redirect to={redirect} /> : <Redirect to="/login" />}
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <ProtectedRoute exact path="/">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute path="/comptoir/:id">
              <Comptoir />
            </ProtectedRoute>
          </Switch>
        </Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
