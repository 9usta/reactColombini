import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

export const cartContext =createContext();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [cart,setCart] = useState([]);

  return (
    <>
    <cartContext.Provider value={{cart}}>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<CartWidget />} />
      </Routes>
    </BrowserRouter>
    </cartContext.Provider>
    </>
  );
}
