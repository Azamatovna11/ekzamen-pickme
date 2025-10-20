import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SingUp"
import DesingWatchPage from "./pages/DesignWatchPage"
import AccessoriesPage from "./pages/AccessoriesPage"
import JewelryPage from "./pages/JewelryPage"
import BrandPage from "./pages/BrandPage"
import WatchesPage from "./pages/WatchesPage"
import CartPage from "./pages/CartPage"
import CreateAccount from "./pages/CreateAccount"
import ProfilePage from "./pages/ProfilePage"
// import ProductDetail from "./pages/ProductDetail"

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "signUp",
                element: <SignUp/>
            },
            {
                path: "DesingWatchPage",
                element: <DesingWatchPage/>
            },
            {
                path: "AccessoriesPage",
                element: <AccessoriesPage/>
            },
            {
                path: "JewelryPage",
                element: <JewelryPage/>
            },
            {
                path: "BrandPage",
                element: <BrandPage/>
            },
            {
                path: "WatchesPage",
                element: <WatchesPage/>
            },
            {
                path: "CartPage",
                element: <CartPage/>
            },
            {
                path: "CreateAccount",
                element: <CreateAccount/>
            },
            {
                path: "ProfilePage",
                element: <ProfilePage/>
            },
        ]
    }
])
export default myRouter