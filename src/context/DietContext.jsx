import { createContext, useState } from 'react'

export const DietContext = createContext()

export const DietContextProvider = ({children}) => {
    const [diet, setDiet] = useState([])
    const [breakfast, setBreakfast] = useState([])    
    const [launch, setLaunch] = useState([])    
    const [dinner, setDinner] = useState([])    
    const [snacks, setSnacks] = useState([])    
    
    console.log(breakfast);
    console.log(launch);
    console.log(breakfast);
    const addItem = (name, id, kcal, protein, carbs, fat, grams, select) => {
        const item = {
            id: id,
            name: name,
            kcal: +kcal,
            protein: +protein,
            carbs: +carbs,
            fat: +fat,
            grams: grams
        }
        let found = diet.find(food => food.id === id)
        const addMore = () => {
            found.grams = found.grams + +kcal
            found.kcal = found.kcal + +kcal
            found.protein = found.protein + +protein
            found.carbs = found.carbs + +carbs
            found.fat = found.fat + +fat
        }
        if (found === undefined) {
            setDiet([
                ...diet,
                item
            ])
        } else {
            addMore()            
        }
        if (select === 'breakfast') {
            let found  = breakfast.find(food => food.id === id)
            if (found === undefined) {
                setBreakfast([
                    ...breakfast,
                    item
                ])
            } else {
                addMore()
            }
        } else if (select === 'launch') {
            let found  = launch.find(food => food.id === id)
            if (found === undefined) {
                setLaunch([
                    ...launch,
                    item
                ])
            } else {
                addMore()
            }
        } else if (select === 'dinner') {
            let found  = dinner.find(food => food.id === id)
            if (found === undefined) {
                setDinner([
                    ...dinner,
                    item
                ])
            } else {
                addMore()
            }
        } else if (select === 'snacks') {
            let found  = snacks.find(food => food.id === id)
            if (found === undefined) {
                setSnacks([
                    ...snacks,
                    item
                ])
            } else {
                addMore()
            }
        }
    }
    
    return(
        <DietContext.Provider value={{addItem, diet, breakfast, launch, dinner, snacks}}>
            { children }
        </DietContext.Provider>
    )
}