import { DietContext } from "../../context/DietContext.jsx"
import { useContext } from "react"

export const ItemMealList = ({item, mealType}) => {

    const dietCtx = useContext(DietContext)

    const deleteIcon = <svg className="deleteIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="delete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg>

    console.log(mealType);
    const ButtonDelete = () => {
        if (mealType === dietCtx.breakfast) {
            return (
                <div onClick={() => dietCtx.removeItemBreakfast(item.id)} style={{height:'30px'}}>
                    {deleteIcon}
                </div>
            )
        } else if (mealType === dietCtx.launch) {
            return (
                <div onClick={() => dietCtx.removeItemLaunch(item.id)} style={{height:'30px'}}>
                    {deleteIcon}
                </div>
            )
        } else if (mealType === dietCtx.dinner) {
            return (
                <div onClick={() => dietCtx.removeItemDinner(item.id)} style={{height:'30px'}}>
                    {deleteIcon}
                </div>
            )
        } else if (mealType === dietCtx.snacks) {
            return (
                <div onClick={() => dietCtx.removeItemSnacks(item.id)} style={{height:'30px'}}>
                    {deleteIcon}
                </div>
            )
        }
    }

    return (
        <div className="itemDiet" key={item.id}>
            <div className="titleContainerItemDiet">
                <div className="nutrientsDiet">
                    <span>{item.name}</span>
                    <span>{item.grams.toFixed(1)} g</span>
                </div>
                <div className="nutrientsDiet">
                    <span>{item.kcal.toFixed(1)}</span>
                </div>
            </div>
            <div className="nutrientsDietContainer">
                <div className="nutrientsDiet">
                    <span>{item.protein.toFixed(1)} g</span>
                </div>
                <div className="nutrientsDiet">
                    <span>{item.carbs.toFixed(1)} g</span>
                </div>
                <div className="nutrientsDiet">
                    <span>{item.fat.toFixed(1)} g</span>
                </div>
                <ButtonDelete/>
            </div>
        </div>
    )
}
