import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Recipes from "../components/Recipes/Recipes";
import Categories from "../components/Categories/Categories";

export default function AppRoutes() {
    return(
    <Routes>
        <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/categories" element={<Categories/>}/>
        </Route>
    </Routes>
    );
}