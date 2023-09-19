import { useState } from 'react'
import ItemModal from '../itemModal/ItemModal.jsx'

export const Item = ({name, id, kcal, protein, carbs, fat, fiber}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <ItemModal handleClose={handleClose} open={open} kcal={kcal} protein={protein} carbs={carbs} fat={fat} name={name} id={id}/>
        <div onClick={handleOpen} className='item' key={id}>
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
                    <span>Calories: <span style={{fontWeight:'700'}}>{kcal} </span></span>
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
        </>
    )
}
