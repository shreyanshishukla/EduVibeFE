import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Coding from "../components/Coding.jsx";
import Learning from "../components/Learning.jsx";
import Scores from "../components/Scores.jsx";

export default createBrowserRouter([
    {
      path: "/",
      element: <App />,
  
      children: [
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "Coding",
          element: <Coding />,
        },
        {
          path: "Learning",
          element: <Learning />,
        },
        { path: "Scores", element: <Scores /> }]}])
