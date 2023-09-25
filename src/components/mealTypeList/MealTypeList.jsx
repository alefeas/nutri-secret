import { MealList } from "../mealList/MealList.jsx"

export const MealTypeList = ({title, mealTypeArray, expand, setExpand, totalCals, totalCarbs, totalProt, totalFat, img}) => {
    return (
        <div className={`mealTypeList ${expand ? 'mealTypeExpandList' : ''}`} id={`${mealTypeArray.length > 0 ? '' : 'mealTypeListShort'}`}>
            <div className="mealTypeTitle">
                <div className="imgTitleContainer">
                    <img width={30} src={img} alt="" />
                    <span className="">{title}</span>
                </div>
                <div className="nutrientsDiet">
                    <span className="number">{totalCals()}</span>
                </div>   
            </div>
            {
                mealTypeArray.length > 0 ?
                <div onClick={() => setExpand(!expand)}>
                <div className="nutrientsDietContainer expandContainer">
                <div className="nutrientsDiet">
                    <span className="number">{totalProt()} g</span>
                </div>            
                <div className="nutrientsDiet">
                    <span className="number">{totalCarbs()} g</span>
                </div>
                <div className="nutrientsDiet">
                    <span className="number">{totalFat()} g</span>
                </div>
                {!expand ? <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg> : <svg className="arrowMealTypeExpand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="upper-arrow"><path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path></svg>}
                </div>
                <span>
                </span>
                </div>
                : <></>
            }
            <MealList mealType={mealTypeArray}/>
        </div>
)
}
