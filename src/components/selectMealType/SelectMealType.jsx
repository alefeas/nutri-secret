import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMealType() {
    const [mealType, setMealType] = useState('');

    const handleChange = (event) => {
        setMealType(event.target.value);
    };

    return (
        <FormControl className='formControl' variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Meal type</InputLabel>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={mealType}
            onChange={handleChange}
            >
            <MenuItem value='breakfast'>Breakfast</MenuItem>
            <MenuItem value='launch'>Launch</MenuItem>
            <MenuItem value='dinner'>Dinner</MenuItem>
            <MenuItem value='snacks'>Snacks</MenuItem>
            </Select>
        </FormControl>
    );
}