import { useContext, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { DietContext } from '../../context/DietContext.jsx'
import SelectMealType from '../selectMealType/SelectMealType.jsx';

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
    width: 500,
    boxShadow: 24,
    p: 4
}

export default function ItemModal({open, handleClose, name, id, kcal, protein, carbs, fat}) {
    const dietCtx = useContext(DietContext)
    const [adding, setAdding] = useState(false)
    const [grams, setGrams] = useState(100)
    const [select, setSelect] = useState('breakfast')

    const handleChange = (gram) => {
        if (gram < 1) {     
            setGrams()
        } else if (gram > 9999) {
            setGrams(9999)
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
        if (grams > 0 || grams < 10000 && !adding) {
            return <button onClick={add}>Add</button>
        } else {
            return <button style={{opacity:'0.5'}}>Add</button>
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
            <Box sx={style}>
                <div>
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
                        <input value={grams} min={1} max={9999} onChange={(e) => handleChange(+e.target.value)} maxLength={5} type="number" inputMode='numeric'/>
                        {
                            grams <= 0 ? 
                            <span>Only positive numbers</span>
                            : <></>
                        }
                    </div>
                </div>
                <div>
                    <span>Energy: { kcalPerGram ? kcalPerGram.toFixed(1) : 0} kcal </span>
                    <span>Protein: { proteinPerGram ? proteinPerGram.toFixed(1) : 0} g </span>
                    <span>Carbs: { carbsPerGram ? carbsPerGram.toFixed(1) : 0} g </span>
                    <span>Fat: { fatPerGram ? fatPerGram.toFixed(1) : 0} g </span>
                </div>
                <button onClick={handleClose}>cancel</button>
                {
                    !adding ?
                    <ButtonAdd/>
                    : <button>Adding...</button>    
                }
            </Box>
            </Fade>
        </Modal>
    )
}