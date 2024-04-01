import React from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// import { FaHeart } from "react-icons/fa";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="Menu"
        onClick={(item) => {
          // item.key;
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashbord",
            icon: <HomeOutlined />,
            key: "/",
          },
          {
            label: "like",
            icon: <HeartFilled />,
            key: "/like",
          },
          {
            label: "Cart",
            icon: <ShoppingCartOutlined />,
            key: "/cart",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
