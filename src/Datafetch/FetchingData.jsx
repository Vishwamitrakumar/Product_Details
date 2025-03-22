import React, { useEffect, useState } from "react";
import { Table, Checkbox, Button, Modal } from "antd";
import axios from "axios";

const FetchingData = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => setProducts(response.data.products))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleCompare = () => {
    setIsModalVisible(true);
  };

  const handleCheckboxChange = (product) => {
    setSelectedProducts((prevSelected) => {
      const isSelected = prevSelected.some(p => p.id === product.id);
      return isSelected ? prevSelected.filter(p => p.id !== product.id) : [...prevSelected, product];
    });
  };

  const columns = [
    {
      title: "Select",
      dataIndex: "select",
      render: (_, record) => (
        <Checkbox
          checked={selectedProducts.some(p => p.id === record.id)}
          onChange={() => handleCheckboxChange(record)}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
    },
    {
      title: "category",
      dataIndex: "category",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Details</h2>
      <Table rowKey="id" columns={columns} dataSource={products} pagination={{ pageSize: 5 }} />
      <Button type="primary" onClick={handleCompare} disabled={selectedProducts.length > 4 }   style={{ marginTop: 10 , color:"black" }}>
        Compare Products
      </Button>
      <Modal title="Compare Products" visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null}>
        <Table rowKey="id" columns={columns.slice(1)} dataSource={selectedProducts} pagination={false} />
      </Modal>
    </div>
  );
};

export default FetchingData;