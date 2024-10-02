import React from "react";
import Layout from "../Components/Layout/Layout";
import { MenuList } from "../data/data.js";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Menu = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {MenuList.map((item) => (
            <Card key={item.id} sx={{ maxWidth: "400px", m: 5 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: "400px" }}
                  component={"img"}
                  src={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "1rem", fontWeight: "bolder" }}
                  >
                    &#8377; {item.price}-/-
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default Menu;
