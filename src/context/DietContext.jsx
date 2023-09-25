import { createContext, useState } from 'react'

export const DietContext = createContext()

export const DietContextProvider = ({children}) => {
    const [diet, setDiet] = useState([])
    const [breakfast, setBreakfast] = useState([])    
    const [launch, setLaunch] = useState([])    
    const [dinner, setDinner] = useState([])    
    const [snacks, setSnacks] = useState([])    

    const addItem = (name, id, kcal, protein, carbs, fat, grams, select) => {
        const item = {
            id: id,
            name: name,
            kcal: +kcal,
            protein: +protein,
            carbs: +carbs,
            fat: +fat,
            grams: +grams
        }
        const addMore = (found) => {
            found.kcal += item.kcal
            found.protein += item.protein
            found.carbs += item.carbs
            found.fat += item.fat
            found.grams += item.grams
        }

        let found = diet.find(food => food.id === id)
        if (found === undefined) {
            setDiet([
                ...diet,
                item
            ])
        }
        if (select === 'breakfast') {
            const foundBreakfast  = breakfast.find(food => food.id === id)
            if (foundBreakfast === undefined) {
                setBreakfast([
                    ...breakfast,
                    item
                ])
            } else {
                addMore(foundBreakfast)
            }
        } else if (select === 'launch') {
            const foundLaunch  = launch.find(food => food.id === id)
            if (foundLaunch === undefined) {
                setLaunch([
                    ...launch,
                    item
                ])
            } else {
                addMore(foundLaunch)
            }
        } else if (select === 'dinner') {
            const foundDinner  = dinner.find(food => food.id === id)
            if (foundDinner === undefined) {
                setDinner([
                    ...dinner,
                    item
                ])
            } else {
                addMore(foundDinner)
            }
        } else if (select === 'snacks') {
            const foundSnacks  = snacks.find(food => food.id === id)
            if (foundSnacks === undefined) {
                setSnacks([
                    ...snacks,
                    item
                ])
            } else {
                addMore(foundSnacks)
            }
        }
    }

    const removeItemBreakfast = (id) => {
        let result = breakfast.filter(item => item.id !== id)
        setBreakfast(result)
    }
    const removeItemLaunch = (id) => {
        let result = launch.filter(item => item.id !== id)
        setLaunch(result)
    }
    const removeItemDinner = (id) => {
        let result = dinner.filter(item => item.id !== id)
        setDinner(result)
    }
    const removeItemSnacks = (id) => {
        let result = snacks.filter(item => item.id !== id)
        setSnacks(result)
    }

    const reset = () => {
        setBreakfast([])
        setLaunch([])
        setDinner([])
        setSnacks([])
    }

    const totalBreakfastCalories = () => {
        return breakfast.reduce((total, item) => total + item.kcal, 0).toFixed(1)
    }
    const totalBreakfastProtein = () => {
        return breakfast.reduce((total, item) => total + item.protein, 0).toFixed(1)
    }
    const totalBreakfastCarbs = () => {
        return breakfast.reduce((total, item) => total + item.carbs, 0).toFixed(1)
    }
    const totalBreakfastFat = () => {
        return breakfast.reduce((total, item) => total + item.fat, 0).toFixed(1)
    }
    
    const totalLaunchCalories = () => {
        return launch.reduce((total, item) => total + item.kcal, 0).toFixed(1)
    }
    const totalLaunchProtein = () => {
        return launch.reduce((total, item) => total + item.protein, 0).toFixed(1)
    }
    const totalLaunchCarbs = () => {
        return launch.reduce((total, item) => total + item.carbs, 0).toFixed(1)
    }
    const totalLaunchFat = () => {
        return launch.reduce((total, item) => total + item.fat, 0).toFixed(1)
    }
    
    const totalDinnerCalories = () => {
        return dinner.reduce((total, item) => total + item.kcal, 0).toFixed(1)
    }
    const totalDinnerProtein = () => {
        return dinner.reduce((total, item) => total + item.protein, 0).toFixed(1)
    }
    const totalDinnerCarbs = () => {
        return dinner.reduce((total, item) => total + item.carbs, 0).toFixed(1)
    }
    const totalDinnerFat = () => {
        return dinner.reduce((total, item) => total + item.fat, 0).toFixed(1)
    }
    
    const totalSnacksCalories = () => {
        return snacks.reduce((total, item) => total + item.kcal, 0).toFixed(1)
    }
    const totalSnacksProtein = () => {
        return snacks.reduce((total, item) => total + item.protein, 0).toFixed(1)
    }
    const totalSnacksCarbs = () => {
        return snacks.reduce((total, item) => total + item.carbs, 0).toFixed(1)
    }
    const totalSnacksFat = () => {
        return snacks.reduce((total, item) => total + item.fat, 0).toFixed(1)
    }
    
    const totalCalories = () => {
        return +totalBreakfastCalories() + +totalDinnerCalories() + +totalSnacksCalories() + +totalLaunchCalories()
    }
    const totalProtein = () => {
        return +totalBreakfastProtein() + +totalDinnerProtein() + +totalSnacksProtein() + +totalLaunchProtein()
    }
    const totalCarbs = () => {
        return +totalBreakfastCarbs() + +totalDinnerCarbs() + +totalSnacksCarbs() + +totalLaunchCarbs()
    }
    const totalFat = () => {
        return +totalBreakfastFat() + +totalDinnerFat() + +totalSnacksFat() + +totalLaunchFat()
    }
    
    return(
        <DietContext.Provider value={{addItem, removeItemBreakfast, removeItemLaunch, removeItemDinner, removeItemSnacks, reset, totalCalories, totalProtein, totalCarbs, totalFat, totalBreakfastCalories, totalBreakfastCarbs, totalBreakfastProtein, totalBreakfastFat, totalDinnerCalories, totalDinnerCarbs, totalDinnerProtein, totalDinnerFat, totalLaunchCalories, totalLaunchCarbs, totalLaunchFat, totalLaunchProtein, totalSnacksCalories, totalSnacksCarbs, totalSnacksFat, totalSnacksProtein, diet, breakfast, launch, dinner, snacks}}>
            { children }
        </DietContext.Provider>
    )
}