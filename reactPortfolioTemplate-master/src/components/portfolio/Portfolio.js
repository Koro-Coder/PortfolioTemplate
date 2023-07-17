import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <div
              style={{
                maxWidth: "100%",
                padding: "30px",
              }}
            >
              <PortfolioBlock
                image={project.image}
                live={project.live}
                source={project.source}
                title={project.title}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
