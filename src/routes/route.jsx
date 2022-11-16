import {createBrowserRouter} from "react-router-dom";
  import Layout from '../pages/Layout'
  import Home from '../pages/Home'
  import Search from '../components/Search'
  
const route = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                path:'/',
                element:<Home/>,
            }
        ]
    }
]);

export default route;