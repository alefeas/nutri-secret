export const MealList = ({mealType}) => {
    return (
        <>
            {
                mealType?.map(item => 
                    <div key={item.id}>
                        <div>
                            <span>{item.name} </span>
                            <span>{item.kcal.toFixed(1)} kcal</span>
                        </div>
                        <span>{item.protein.toFixed(1)} g </span>
                        <span>{item.carbs.toFixed(1)} g </span>
                        <span>{item.fat.toFixed(1)} g </span>
                    </div>
                )
            }
        </>
    )
}
