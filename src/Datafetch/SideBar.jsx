import React, { useState } from "react";
import { Button, Layout, Menu} from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Sider, Content } = Layout;
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setting, setSetting] = useState(false);


  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([0]);
const [show , setShow] = useState(false);

  // Modal open for preview
  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewOpen(true);
  };
const h = () => {
  setShow(true);
 
}
const settingHandle = async () => {
 await setSetting(true)
  alert("Setting features isn't available  ")
  setSetting(false)
}
const handlecalcle = () => {
setShow(false);
}

  // Handle file upload changes
  const handleChange = ({ fileList }) => setFileList(fileList);
  // Function to handle "Settings" click
  

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>{<Link to="/">Home</Link> }</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}  onClick={h}>Profile</Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />} onClick={settingHandle}>Settings</Menu.Item>
          {show && (
            <div>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => true} // Disable instant upload
            >
              {fileList.length >= 1 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 10 , color : "white" }}>Upload</div>
                </div>
              )}
            </Upload>
      
            {/* Full image preview modal */}
            <Modal
              open={previewOpen}
              footer={null}
              onCancel={() => setPreviewOpen(false)}
            >
              <img alt="Preview" style={{ width: "100%" }} src={previewImage} />
            </Modal>
            <Button onClick={handlecalcle} style={{marginLeft:20 , width:50 , height:25}}>Cancle</Button>
          </div>
          )}
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideBar;






