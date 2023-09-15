import { Link } from "react-router-dom"
import { MealList } from "../mealList/MealList.jsx"
import { useContext } from "react"
import { DietContext } from "../../context/DietContext.jsx"

export const Home = () => {
    const dietCtx = useContext(DietContext)
    console.log(dietCtx);

    return (
        <div>
            <Link to='search'>asd</Link>
            <h1>NUTRI SECRET</h1>
            <div>
                <div>
                    <span>Breakfast</span>
                    <MealList mealType={dietCtx.breakfast}/>
                </div>
                <div>
                    <span>Launch</span>
                    <MealList mealType={dietCtx.launch}/>
                </div>
                <div>
                    <span>Dinner</span>
                    <MealList mealType={dietCtx.dinner}/>
                </div>
                <div>
                    <span>Snacks | Others</span>
                    <MealList mealType={dietCtx.snacks}/>
                </div>
            </div>
        </div>
    )
}
