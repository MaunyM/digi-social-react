import React from "react";
import { Login } from "./features/user/Login";
import "antd/dist/antd.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Space, Typography } from "antd";
import "./App.css";
import { selectUser } from "./features/user/userSlice";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import { Home } from "./app/Home";
import { BrowserRouter } from "react-router-dom";

const { Title } = Typography;

function App() {
  const user = useSelector(selectUser);

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
          <Switch>
            <Route exact path="/" render={() => user.me?<Home/>:<Login/>} />
          </Switch>
        </Content>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
