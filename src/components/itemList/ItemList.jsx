import { Item } from '../item/Item.jsx'

export const ItemList = ({data, seeMore, loading, loadingMore, nextPage}) => {
    return (
        <div className='itemList'>
            {
                data.map(nutrient => 
                    <Item 
                    name={nutrient.food.label} 
                    id={nutrient.food.foodId} 
                    kcal={nutrient.food.nutrients.ENERC_KCAL?.toFixed(1)} 
                    protein={nutrient.food.nutrients.PROCNT?.toFixed(1)}
                    carbs={nutrient.food.nutrients.CHOCDF?.toFixed(1)}
                    fat={nutrient.food.nutrients.FAT?.toFixed(1)}
                    fiber={nutrient.food.nutrients.FIBTG?.toFixed(1)}
                    serving={nutrient.measures[0].label}
                    />
                    )
            }
            <>
            {
                nextPage !== '' && !loading ?
                <button className='seeMoreButton' onClick={seeMore}>
                    {
                        !loadingMore ?
                        'See more'
                        : 'Loading...'
                    }
                </button>
                : <></>
            }
            </>
        </div>
    )
}
