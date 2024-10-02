import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            height:"70vh",
            my: 5,
            textAlign: "center",
            p: 2,
            "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
            "& p": { textAlign: "justify" },
            "@media(max-width:600px)": { mt: 0, "& h4": { fontSize: "1rem" } },
          }}
        >
          <Typography variant="h4">Welcome To My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            laboriosam officia! Magnam esse recusandae ea itaque corrupti quasi,
            quia doloremque numquam, fugiat, minus in? Obcaecati sapiente
            blanditiis quaerat! Ab error ad quae, eos delectus hic nostrum illo
            excepturi necessitatibus sapiente libero porro aut autem, iste
            officiis! Officia excepturi quas rem. Deserunt voluptatibus minima
            harum ad laborum voluptas totam doloremque ut molestiae vero at,
            consequuntur repudiandae. Tenetur illo officia dolor iste voluptatem
            tempore molestias quasi cumque! Facilis non pariatur accusamus
            soluta assumenda in illum rem laboriosam consequuntur. Ut quibusdam
            et at, provident, laborum, quae in dolores hic nihil optio corporis
            ducimus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            laboriosam officia! Magnam esse recusandae ea itaque corrupti quasi,
            quia doloremque numquam, fugiat, minus in? Obcaecati sapiente
            blanditiis quaerat! Ab error ad quae, eos delectus hic nostrum illo
            excepturi necessitatibus sapiente libero porro aut autem, iste
            officiis! Officia excepturi quas rem. Deserunt voluptatibus minima
            harum ad laborum voluptas totam doloremque ut molestiae vero at,
            consequuntur repudiandae. Tenetur illo officia dolor iste voluptatem
            tempore molestias quasi cumque! Facilis non pariatur accusamus
            soluta assumenda in illum rem laboriosam consequuntur. Ut quibusdam
            et at, provident, laborum, quae in dolores hic nihil optio corporis
            ducimus.
          </p>
        </Box>
      </Layout>
    </>
  );
};

export default About;
