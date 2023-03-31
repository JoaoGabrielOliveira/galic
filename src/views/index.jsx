import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Routes from "Routes";

const Views = () => <RouterProvider router={createBrowserRouter(Routes)} />

export default Views;