import { Link } from "react-router-dom"
import { MealList } from "../mealList/MealList.jsx"
import { useContext, useState } from "react"
import { DietContext } from "../../context/DietContext.jsx"

export const Home = () => {
    const dietCtx = useContext(DietContext)

    const [expandBreakfast, setExpandBreakfast] = useState(false)
    const [expandLaunch, setExpandLaunch] = useState(false)
    const [expandDinner, setExpandDinner] = useState(false)
    const [expandSnacks, setExpandSnacks] = useState(false)

    console.log(dietCtx.totalDinnerCalories());
    return (
        <div className="home">
            <Link to='search'>asd</Link>
            <h1>NUTRI SECRET</h1>
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
            <div className={`mealTypeList ${expandBreakfast ? 'mealTypeExpandList' : ''}`} id={`${dietCtx.breakfast.length > 0 ? '' : 'mealTypeListShort'}`}>
                <div className="mealTypeTitle">
                    <span className="">Breakfast</span>
                    <div className="nutrientsDiet">
                        <span>{dietCtx.totalBreakfastCalories()}</span>
                    </div>   
                </div>
                {
                    dietCtx.breakfast.length > 0 ?
                    <div onClick={() => setExpandBreakfast(!expandBreakfast)}>
                    <div className="nutrientsDietContainer expandContainer">
                    <div className="nutrientsDiet">
                        <span>{dietCtx.totalBreakfastProtein()} g</span>
                    </div>            
                    <div className="nutrientsDiet">
                        <span>{dietCtx.totalBreakfastCarbs()} g</span>
                    </div>
                    <div className="nutrientsDiet">
                        <span>{dietCtx.totalBreakfastFat()} g</span>
                    </div>
                    {!expandBreakfast ? <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg> : <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>}
                    </div>
                    <span>
                    </span>
                    </div>
                    : <></>
                }
                <MealList mealType={dietCtx.breakfast}/>
            </div>
            <div className={`mealTypeList ${expandLaunch ? 'mealTypeExpandList' : ''}`} id={`${dietCtx.launch.length > 0 ? '' : 'mealTypeListShort'}`}>
                    <div className="mealTypeTitle">
                        <span className="">Launch</span>
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalLaunchCalories()}</span>
                        </div>   
                    </div>
                    {
                        dietCtx.launch.length > 0 ?
                        <div onClick={() => setExpandLaunch(!expandLaunch)}>
                        <div className="nutrientsDietContainer expandContainer">
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalLaunchProtein()} g</span>
                        </div>            
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalLaunchCarbs()} g</span>
                        </div>
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalLaunchFat()} g</span>
                        </div>
                        {!expandLaunch ? <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg> : <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>}
                        </div>
                        <span>
                        </span>
                        </div>
                        : <></>
                    }
                    <MealList mealType={dietCtx.launch}/>
                </div>
                <div className={`mealTypeList ${expandDinner ? 'mealTypeExpandList' : ''}`} id={`${dietCtx.dinner.length > 0 ? '' : 'mealTypeListShort'}`}>
                    <div className="mealTypeTitle">
                        <span className="">Dinner</span>
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalDinnerCalories()}</span>
                        </div>   
                    </div>
                    {
                        dietCtx.dinner.length > 0 ?
                        <div onClick={() => setExpandDinner(!expandDinner)}>
                        <div className="nutrientsDietContainer expandContainer">
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalDinnerProtein()} g</span>
                        </div>            
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalDinnerCarbs()} g</span>
                        </div>
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalDinnerFat()} g</span>
                        </div>
                        {!expandDinner ? <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg> : <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>}
                        </div>
                        <span>
                        </span>
                        </div>
                        : <></>
                    }
                    <MealList mealType={dietCtx.dinner}/>
                </div>
                <div className={`mealTypeList ${expandSnacks ? 'mealTypeExpandList' : ''}`} id={`${dietCtx.snacks.length > 0 ? '' : 'mealTypeListShort'}`}>
                    <div className="mealTypeTitle">
                        <span className="">Snacks</span>
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalSnacksCalories()}</span>
                        </div>   
                    </div>
                    {
                        dietCtx.snacks.length > 0 ?
                        <div onClick={() => setExpandSnacks(!expandSnacks)}>
                        <div className="nutrientsDietContainer expandContainer">
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalSnacksProtein()} g</span>
                        </div>            
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalSnacksCarbs()} g</span>
                        </div>
                        <div className="nutrientsDiet">
                            <span>{dietCtx.totalSnacksFat()} g</span>
                        </div>
                        {!expandSnacks ? <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg> : <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>}
                        </div>
                        <span>
                        </span>
                        </div>
                        : <></>
                    }
                    <MealList mealType={dietCtx.snacks}/>
                </div>
            </div>
        </div>
    )
}
