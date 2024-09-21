import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Information from "./pages/Information"

const routes = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/information/:id",
        element: <Information/>
    }
]

export default routes