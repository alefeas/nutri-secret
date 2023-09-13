import { useEffect, useState } from 'react';
import axios from 'axios';
import { ItemList } from '../itemList/ItemList.jsx';

export const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [nextPage, setNextPage] = useState('')

    const fetch = async (url) => {  
        setLoading(true)
        try {
            const response = await axios.get(url)
            setData(response.data.hints);
            if (response.data._links) {
            setNextPage(response.data._links.next.href)
            } else {
            setNextPage('')
            }
        } catch (error){
            console.error('Error getting API data:', error);
        }
        setLoading(false)
    }

    useEffect(() => {
        const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${inputValue}`
        if (inputValue !== '') {
            fetch(apiUrl)
        }
        console.log('0a');
    }, [inputValue]);
    
    const fetchMore = async (url) => {  
        try {
            const response = await axios.get(url);
            setData(oldArray => [...oldArray, ...response.data.hints]);
            if (response.data._links) {
                setNextPage(response.data._links.next.href)
            } else {
                setNextPage('')
            }
        } catch (error){
            console.error('Error getting API data:', error);
        }
    }

    const seeMore = async () => {
        fetchMore(nextPage)
    }

    return (
        <div>
            <input onChange={(e) => setInputValue(e.target.value)} type="text" />
            {
            inputValue === '' ?
            <div>Search!</div>
            :
            <ItemList data={data} loading={loading}/>
            }
            {
            nextPage !== '' && !loading && inputValue !== ''?
            <button onClick={seeMore}>See more</button>
            : <> </>
            }
        </div>
    )
}
