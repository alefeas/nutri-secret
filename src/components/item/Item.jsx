import { useContext } from 'react'
import { DietContext } from '../../context/DietContext.jsx'

export const Item = ({name, id, kcal, protein, carbs, fat, fiber}) => {
    
    const dietCtx = useContext(DietContext)

    return (
        <div onClick={() => dietCtx.addItem(name, id, kcal, protein, carbs, fat)} className='item' key={id}>
            <div className='column quantityColumn'>
                <span>100</span>
            </div>
            <div className='column unitColumn'>
                <span>g</span>
            </div>
            <div className='column foodColumn'>
                <span>{name}</span>
            </div>
            <div className='column nutrientsColumn'>
                <div>
                    { kcal ?
                    <span>Energy: <span style={{fontWeight:'700'}}>{kcal} kcal</span></span>
                    : <></>}
                    { protein ?
                    <span>Protein: <span style={{fontWeight:'700'}}>{protein} g</span></span>
                    : <></>}
                    { carbs ?
                    <span>Carb: <span style={{fontWeight:'700'}}>{carbs} g</span></span>
                    : <></>}
                    { fat ?
                    <span>Fat: <span style={{fontWeight:'700'}}>{fat} g</span></span>
                    : <></>}
                    { fiber ?
                    <span>Fiber: <span style={{fontWeight:'700'}}>{fiber} g</span></span>
                    : <></>}
                </div>
            </div>
        </div>
    )
}
