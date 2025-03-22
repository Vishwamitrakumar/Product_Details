import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import  "./Navigation.css";
import { Link } from "react-router-dom";
import FetchingData from "../Datafetch/FetchingData";

const { Header } = Layout;

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const menuItems = [
    { key: "1",  label:  <Link to="/">Home</Link>},
    { key: "2",  label: <Link to="/FetchingData">Product Details</Link> },
  ];

  return (
    <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
      <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}><img src=" kyc_hub.png" style={{width:35 , height:30 , marginRight:10}}/>KycHub  Fronted End </div>

      <div className="desktop-menu">
        <Menu theme="dark" mode="horizontal" items={menuItems} />
      </div>

      <Button type="primary" icon={<MenuOutlined />} className="mobile-menu-button" onClick={showDrawer} />

      <Drawer title="Menu" placement="right" onClose={closeDrawer} open={visible}>
        <Menu mode="vertical" items={menuItems} />
      </Drawer>
    </Header>
  );
};

export default Navigation;
