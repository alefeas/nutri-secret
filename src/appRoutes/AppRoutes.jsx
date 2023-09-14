import { Route, Routes } from "react-router-dom"
import { ItemListContainer } from "../components/itemListContainer/ItemListContainer.jsx"
import { Home } from "../components/home/Home.jsx"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<ItemListContainer/>}/>
        </Routes>
    )
}
