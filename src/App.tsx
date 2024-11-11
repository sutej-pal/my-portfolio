import { RouterProvider } from "react-router";

// Import bootstrap

import "./App.scss";

import generateRoutes from "./routes";

function App() {
  return (
    <RouterProvider router={generateRoutes()} />
    // <div className="container-fluid">
    //     <Header/>
    //
    // </div>
  );
}

export default App;
