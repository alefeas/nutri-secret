import { ItemMealList } from "../itemMealList/ItemMealList.jsx";

export const MealList = ({mealType}) => {

    return (
        <>
            {
                mealType?.map(item => 
                    <ItemMealList item={item} mealType={mealType}/>
                )
            }
        </>
    )
}
