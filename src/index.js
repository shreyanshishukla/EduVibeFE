import reactDom from "react-dom/client";
import App from "./components/App";
import "./main.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router";
import Header from "./components/Header.jsx";
const root=reactDom.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
       
    <RouterProvider router={router}>
  <App/></RouterProvider></Provider>)
if(module.hot)
module.hot.accept();