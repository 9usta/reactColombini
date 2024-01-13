import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <img src="/images/g-logo.webp" alt="gustavo-logo" width="60" />
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
                ></Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    <>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/">Home</Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/category/con-esmalte">Con esmalte</Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/category/sin-esmalte">Sin esmalte</Link>
                      </MenuItem>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/cart">Carro</Link>
                      </MenuItem>
                    </>
                  </Menu>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                ></Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Link to="/">Home </Link>
                  <Link to="/category/con-esmalte">Con esmalte  </Link>
                  <Link to="/category/sin-esmalte">Sin esmalte  </Link>
                  <Link to="/cart">Carro</Link>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <CartWidget />
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </ThemeProvider>
      </Stack>
    </>
  );
}
