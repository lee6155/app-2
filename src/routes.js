import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Information from "./pages/Information"
import Account from "./pages/Account"

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
    },
    {
        path: "/account",
        element: <Account/>
    }
]

export default routes