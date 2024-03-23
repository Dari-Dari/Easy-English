import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import Main from "./Pages/Main/Main";
import ListWord from "./Components/ListWord/ListWord";
import Training from "./Pages/Training/Training";
import MyList from "./Components/MyList/MyList";
import AllTraining from "./Components/TrainingAll/AllTraining";
import MyListTraining from "./Components/TrainingMyList/MyListTraining";

const { Header, Footer, Sider, Content } = Layout;

const items = [
  { key: "1", label: "Главная", icon: <PieChartOutlined />, path: "/main" },
  { key: "2", label: "Список", icon: <ContainerOutlined />, path: "/list" },
  {
    key: "3",
    label: "Тренировка",
    icon: <DesktopOutlined />,
    path: "/training",
  },
  {
    key: "4",
    label: "Мой список",
    icon: <AppstoreOutlined />,
    path: "/mylist",
  },
];

const App = () => {
  const [myList, setMyList] = useState([]);

  const addToMyList = (word) => {
    setMyList([...myList, word]);
    // Сохраняем обновленный список в localstorage
    localStorage.setItem("myList", JSON.stringify([...myList, word]));
  };

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            height: "6%",
            backgroundColor: "#8F00FF",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: 50, borderRadius: 10 }}
            src="/png-clipart-cheeky-monkey-english-baby-black-english-reading.png"
            alt="logo"
          />
          <span style={{ marginLeft: 10, fontSize: 36 }}>Easy English</span>
        </Header>
        <Layout style={{ display: "flex", flexGrow: 1 }}>
          <Sider
            width={200}
            height={"100%"}
            style={{
              backgroundColor: "#8F00FF",
              color: "#fff",
            }}
          >
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              style={{ backgroundColor: "#8F00FF", color: "#fff" }}
            >
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            <Routes>
              <Route path="/main" element={<Main />} />
              <Route index element={<Main />} />
              <Route
                path="/list"
                element={<ListWord addToMyList={addToMyList} />}
              />
              <Route path="/training" element={<Training />} />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/alltraining" element={<AllTraining />} />
              <Route path="/mylisttraining" element={<MyListTraining />} />
            </Routes>
          </Content>
        </Layout>
        <Footer
          style={{
            backgroundColor: "#8F00FF",
            color: "#fff",
            textAlign: "center",
          }}
        >
          ©️Fadeeva Daria 2024
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
