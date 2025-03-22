import React from 'react'

import { Layout, Menu, Avatar, Button, Flex } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import "../Navigation/Navigation.css"
import SideBar from './SideBar';
import FetchingData from './FetchingData';

const ItemShow = () => {
  return (
    
    <div className='Item'>
      <div> <SideBar /></div>
      <div>
        <FetchingData />
        
         </div>
    </div>
  )
};


export default ItemShow;
