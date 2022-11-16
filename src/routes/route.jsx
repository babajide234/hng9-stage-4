import {createBrowserRouter} from "react-router-dom";
  import Layout from '../pages/Layout'
  import Home from '../pages/Home'
  import SearchPage from '../pages/Search'

const route = createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
    },
    {
        path:'/place',
        element: <SearchPage/>,
    }
]);

export default route;