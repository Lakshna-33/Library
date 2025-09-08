import React from "react"
import App from './App.jsx'
import "./App.css"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router"
import PageNotFound from "./components/PageNotFound.jsx"
import BrowseBooks from "./components/BrowseBooks.jsx"
import Welcome from "./components/Welcome.jsx"
import Bookdetails from "./components/Bookdetails.jsx"
import { Provider } from "react-redux"
import appstore from "./Data/appstore.js"
import CartPage from "./components/CartPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
    {
    path: "/home",
    element: <App />,
  },
  {
    path: "/browsebooks",
    element: <BrowseBooks />,
  },
  {
    path: "/book/:id",
    element: <Bookdetails/>
  },
  {
    path: "/cartpage",
    element :  <CartPage/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  },

  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appstore}>
    <RouterProvider router = {appRouter} />
  </Provider>,
)
