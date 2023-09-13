import React from 'react'
import { Item } from '../item/Item.jsx'

export const ItemList = ({data, loading}) => {
    console.log(data);
    return (
        <>
            {
            !loading && data ?
                <div>
                    {
                        data.map(nutrient => 
                            <Item 
                                name={nutrient.food.label} 
                                key={nutrient.food.foodId} 
                                kcal={nutrient.food.nutrients.ENERC_KCAL?.toFixed(1)} 
                                protein={nutrient.food.nutrients.PROCNT?.toFixed(1)}
                                carbs={nutrient.food.nutrients.CHOCDF?.toFixed(1)}
                                fat={nutrient.food.nutrients.FAT?.toFixed(1)}
                                fiber={nutrient.food.nutrients.FIBTG?.toFixed(1)}
                                serving={nutrient.measures[0].label}
                            />
                        )
                    }
                </div>  
                :
                <p>Loading data...</p>
            }
        </>
    )
}
