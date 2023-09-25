import { useContext, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { DietContext } from '../../context/DietContext.jsx'

const style = {
    display: 'flex',
    flexDirection:'column',
    outline: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    width: 280,
    boxShadow: 24,
    p: 2
}

export default function ItemModal({open, handleClose, name, id, kcal, protein, carbs, fat}) {
    const dietCtx = useContext(DietContext)
    const [adding, setAdding] = useState(false)
    const [grams, setGrams] = useState(100)
    const [select, setSelect] = useState('breakfast')

    const handleChange = (gram) => {
        if (gram < 1) {     
            setGrams()
        } else if (gram > 3000) {
            setGrams(3000)
        } else {
            setGrams(gram)
        }
    }

    const kcalPerGram = kcal*grams*0.01
    const proteinPerGram = protein*grams*0.01
    const carbsPerGram = carbs*grams*0.01
    const fatPerGram = fat*grams*0.01
    
    useEffect(() => {
        setTimeout(() => {
            setAdding(false)    
        }, 250);
    }, [open])

    const add =  () => {
        setAdding(true)
        setTimeout(() => {
            dietCtx.addItem(name, id, kcalPerGram, proteinPerGram, carbsPerGram, fatPerGram, grams, select)
            handleClose()
        }, 500);
    }

    const ButtonAdd = () => {
        if (dietCtx.totalCalories() + kcalPerGram >= 10000) {
            return <button style={{opacity:'0.75'}}>Add</button>
        } else if (grams > 0 || grams <= 3000 && !adding) {
            return <button onClick={add}>Add</button>
        } else {
            return <button style={{opacity:'0.75'}}>Add</button>
        }
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >
            <Fade in={open}>
            <Box className='modal' sx={style}>
                <div className='horizontalContainer'>
                    <div className='smallModalContainer'>
                        <span>Meal type</span>
                        <select value={select} onChange={(e) => setSelect(e.target.value)} name="" id="">
                            <option value="breakfast">Breakfast</option>
                            <option value="launch">Launch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snacks">Snacks</option>
                        </select>
                    </div>
                    <div className='smallModalContainer'>
                        <span>Grams</span>
                        <input value={grams} min={1} max={3000} onChange={(e) => handleChange(+e.target.value)} maxLength={5} type="number" inputMode='numeric'/>
                        {
                            grams <= 0 ? 
                            <span>Only positive numbers</span>
                            : <></>
                        }
                    </div>
                </div>
                <div className='horizontalContainer'>
                    <div className='smallModalContainer'>
                        <span>Cals</span>
                        <span>{ kcalPerGram ? kcalPerGram.toFixed(1) : 0} </span>
                    </div>
                    <div className='smallModalContainer'>
                        <span>Prot</span>
                        <span>{ proteinPerGram ? proteinPerGram.toFixed(1) : 0} g </span>
                    </div>
                    <div className='smallModalContainer'>
                        <span>Carbs</span>
                        <span>{ carbsPerGram ? carbsPerGram.toFixed(1) : 0} g </span>
                    </div>
                    <div className='smallModalContainer'>
                        <span>Fat</span>
                        <span>{ fatPerGram ? fatPerGram.toFixed(1) : 0} g </span>
                    </div>
                </div>
                <div className='buttonContainer'>
                    <button className='cancelButton' onClick={handleClose}>Cancel</button>
                    {
                        !adding ?
                        <ButtonAdd/>
                        : <button  style={{opacity:'0.75'}}>Adding...</button>    
                    }
                </div>
                {
                    dietCtx.totalCalories() + kcalPerGram >= 10000 ?
                    <span className='excessSpan'>The total sum of calories cannot exceed 10000</span>
                    : <></>
                }
            </Box>
            </Fade>
        </Modal>
    )
}