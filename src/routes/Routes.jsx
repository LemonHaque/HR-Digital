import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
        // errorElement:<ErrorPage></ErrorPage>,
        // children: [
        //     {
        //         path: '/',
        //         element: <Home></Home>
        //     },
        //     // {
        //     //     path: '/recipes/:id',
        //     //     element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        //     //     loader: ({ params }) => fetch(`https://hungry-express-server-lemonhaque.vercel.app/recipes/${params.id}`),

        //     // },
        //     {
        //         path: '/login',
        //         element: <Login></Login>
        //     },
        //     {
        //         path: '/register',
        //         element: <Register></Register>
        //     },
         
        // ]
    }
])

export default router;
