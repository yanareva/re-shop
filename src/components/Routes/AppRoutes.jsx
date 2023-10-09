import { Route, Routes} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes =()=>{
    return(
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.PRODUCT}element={<SingleProduct/>} />
        </Routes>
    )
}
export default AppRoutes;
