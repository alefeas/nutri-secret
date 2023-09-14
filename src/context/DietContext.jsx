import { createContext, useState } from 'react'

export const DietContext = createContext()

export const DietContextProvider = ({children}) => {
    const [diet, setDiet] = useState([])
    const [breakfast, setBreakfast] = useState([])    
    const [launch, setLaunch] = useState([])    
    const [dinner, setDinner] = useState([])    
    const [snacks, setSnacks] = useState([])    

    const addItem = (name, id, kcal, protein, carbs, fat) => {
        let found = diet.find(food => food.id === id)
        if (found === undefined) {
            setDiet([
                ...diet,
                {
                    id: id,
                    name: name,
                    kcal: +kcal,
                    protein: +protein,
                    carbs: +carbs,
                    fat: +fat
                }
            ])
        } else {
            found.kcal = found.kcal + +kcal
            found.protein = found.protein + +protein
            found.carbs = found.carbs + +carbs
            found.fat = found.fat + +fat
        }
    }
    
    return(
        <DietContext.Provider value={{addItem, diet}}>
            { children }
        </DietContext.Provider>
    )
}