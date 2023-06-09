import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const ResponsiveAppBar = () => {
  const linkToCV =
    "https://drive.google.com/file/d/1LdpAPuzoNfrJINaBFUJ8c1yNAvqH8DCp/view?usp=sharing";

  return (
    <AppBar
      position="fixed"
      className="navbar"
      sx={{
        bgcolor: "rgba(221, 221, 221, 0)",
        boxShadow:
          "0px 0px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Sahim Bhaur
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* <Button sx={{ my: 2, color: "black", display: "block" }}>
              Blog
            </Button> */}

            <Button
              sx={{ my: 2, color: "black", display: "block" }}
              onClick={() => {
                window.open(linkToCV);
              }}
            >
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
