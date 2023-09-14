import { ItemListContainer } from "../itemListContainer/ItemListContainer.jsx"
import { DietContext } from "../../context/DietContext.jsx"
import { useContext } from "react"
import { Link } from "react-router-dom"
export const Home = () => {
    const dietCtx = useContext(DietContext)
    return (
        <div>
            <Link to='search'>asd</Link>
            <h1>NUTRI SECRET</h1>
            <div>
                <div>
                    <span>Breakfast</span>
                    {
                        dietCtx.diet?.map(item => 
                            <div>{item.name}</div>
                        )
                    }
                </div>
                <div>
                    <span>Lunch</span>
                    <div></div>
                </div>
                <div>
                    <span>Dinner</span>
                    <div></div>
                </div>
                <div>
                    <span>Snacks | Others</span>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
