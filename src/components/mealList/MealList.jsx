import { useState } from "react";
import { ItemMealList } from "../itemMealList/ItemMealList.jsx";

export const MealList = ({mealType}) => {
    const [deleting, setDeleting] = useState(false)

    return (
        <>
            {
                mealType?.map(item => 
                    <ItemMealList item={item} mealType={mealType} deleting={deleting} setDeleting={setDeleting}/>
                )
            }
        </>
    )
}
