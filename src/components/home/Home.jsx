import { Link } from "react-router-dom"
import { MealList } from "../mealList/MealList.jsx"
import { useContext, useState } from "react"
import { DietContext } from "../../context/DietContext.jsx"
import { MealTypeList } from "../mealTypeList/MealTypeList.jsx"

export const Home = () => {
    const dietCtx = useContext(DietContext)

    const [expandBreakfast, setExpandBreakfast] = useState(false)
    const [expandLaunch, setExpandLaunch] = useState(false)
    const [expandDinner, setExpandDinner] = useState(false)
    const [expandSnacks, setExpandSnacks] = useState(false)

    return (
        <div className="home">
            <div className="dietDetailsContainer">
            <div className="nutrientsDietContainer">
                <div className="nutrientsDiet">
                    <span>Prot</span>
                    <span>{dietCtx.totalProtein().toFixed(1)} g</span>
                </div>            
                <div className="nutrientsDiet">
                    <span>Carbs</span>
                    <span>{dietCtx.totalCarbs().toFixed(1)} g</span>
                </div>
                <div className="nutrientsDiet">
                    <span>Fat</span>
                    <span>{dietCtx.totalFat().toFixed(1)} g</span>
                </div>
                <div className="nutrientsDiet">
                    <span>Cals</span>
                    <span>{dietCtx.totalCalories().toFixed(1)}</span>
                </div>                    
            </div>
            <MealTypeList img='https://cdn-icons-png.flaticon.com/512/4726/4726331.png' title='Breakfast' mealTypeArray={dietCtx.breakfast} expand={expandBreakfast} setExpand={setExpandBreakfast} totalCals={dietCtx.totalBreakfastCalories} totalProt={dietCtx.totalBreakfastProtein} totalCarbs={dietCtx.totalBreakfastCarbs} totalFat={dietCtx.totalBreakfastFat}/>
            <MealTypeList img='https://cdn-icons-png.flaticon.com/512/76/76463.png' title='Launch' mealTypeArray={dietCtx.launch} expand={expandLaunch} setExpand={setExpandLaunch} totalCals={dietCtx.totalLaunchCalories} totalProt={dietCtx.totalLaunchProtein} totalCarbs={dietCtx.totalLaunchCarbs} totalFat={dietCtx.totalLaunchFat}/>
            <MealTypeList img='https://cdn-icons-png.flaticon.com/512/130/130301.png' title='Dinner' mealTypeArray={dietCtx.dinner} expand={expandDinner} setExpand={setExpandDinner} totalCals={dietCtx.totalDinnerCalories} totalProt={dietCtx.totalDinnerProtein} totalCarbs={dietCtx.totalDinnerCarbs} totalFat={dietCtx.totalDinnerFat}/>
            <MealTypeList img='https://cdn-icons-png.flaticon.com/512/66/66696.png' title='Snacks | Others' mealTypeArray={dietCtx.snacks} expand={expandSnacks} setExpand={setExpandSnacks} totalCals={dietCtx.totalSnacksCalories} totalProt={dietCtx.totalSnacksProtein} totalCarbs={dietCtx.totalSnacksCarbs} totalFat={dietCtx.totalSnacksFat}/>
            <div className="resetSearchButtonContainer">
                <Link to='search'>Search food<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg></Link>
                <div className="reset" onClick={dietCtx.reset}>Reset diet<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="restart"><path fill="#111" fill-rule="evenodd" d="M18.364 3.05762C18.7782 3.05762 19.114 3.3934 19.114 3.80762V8.05026C19.114 8.46447 18.7782 8.80026 18.364 8.80026H14.1213C13.7071 8.80026 13.3713 8.46447 13.3713 8.05026C13.3713 7.63604 13.7071 7.30026 14.1213 7.30026H16.4817C13.6363 5.05718 9.4987 5.24825 6.87348 7.87348C4.04217 10.7048 4.04217 15.2952 6.87348 18.1265C9.70478 20.9578 14.2952 20.9578 17.1265 18.1265C19.0234 16.2297 19.6504 13.5428 19.0039 11.1219C18.897 10.7217 19.1348 10.3106 19.535 10.2038C19.9352 10.0969 20.3462 10.3347 20.4531 10.7349C21.2321 13.6518 20.478 16.8964 18.1872 19.1872C14.7701 22.6043 9.2299 22.6043 5.81282 19.1872C2.39573 15.7701 2.39573 10.2299 5.81282 6.81282C9.04483 3.5808 14.1762 3.40576 17.614 6.28768V3.80762C17.614 3.3934 17.9497 3.05762 18.364 3.05762Z" clip-rule="evenodd"></path></svg></div>
                </div>
            </div>
        </div>
    )
}
