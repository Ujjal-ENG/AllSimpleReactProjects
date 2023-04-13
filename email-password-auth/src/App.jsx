/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
