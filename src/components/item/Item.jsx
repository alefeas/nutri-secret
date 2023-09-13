import React from 'react'

export const Item = ({name, id, kcal, protein, carbs, fat, fiber, serving}) => {
    return (
        <div className='item' key={id}>
            <div className='column foodColumn'>
                <span>Food</span>
                <span>{name}</span>
            </div>
            <div className='column'>
                <span>Quantity</span>
                <span>100</span>
            </div>
            <div className='column'>
                <span>Unit</span>
                <span>g</span>
            </div>
            <div className='column'>
                <span>Nutrients</span>
                <div>
                    { kcal ?
                    <span>Energy {kcal} kcal</span>
                    : <></>}
                    { protein ?
                    <span>Protein {protein} g</span>
                    : <></>}
                    { carbs ?
                    <span>Carb {carbs} g</span>
                    : <></>}
                    { fat ?
                    <span>Fat {fat} g</span>
                    : <></>}
                    { fiber ?
                    <span>Fiber {fiber} g</span>
                    : <></>}
                </div>
            </div>
        </div>
    )
}
