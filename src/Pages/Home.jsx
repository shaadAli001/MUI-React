import React from "react";
import Layout from "../Components/Layout/Layout";
import { Button } from "@mui/material";
import banner from "../images/banner.jpeg";
import { Link } from "react-router-dom";
import ".././Styles/HomeStyle.css";
const Home = () => {
  return (
    <>
      <Layout>
        <div className="home" style={{ backgroundImage: `url(${banner})` }}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best Indian Food Here!!</p>
            <Link to={"/menu"}>
              <Button variant="contained">ORDER NOW</Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
