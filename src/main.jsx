// import './styles/global.css';
import "./styles/tailwind.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  // Routes
  [
    // Routes Object
    {
      path: "/",
      element: <Layout />,
      children : [
        { path : 'CTA' , element: <CTA/>}
      ]
    },
  ]
);


Function CTA (){
  return (
    <div>
      <abbr title=""></abbr>
    </div>
  )
}

// ReactDOMRoot { render, unmount }
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* Virtual DOM (React Element Tree : React Created) */}
  </StrictMode>
);

// rendering → mount (DOM)
