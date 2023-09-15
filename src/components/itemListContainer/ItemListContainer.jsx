import axios from 'axios';
import { ItemList } from '../itemList/ItemList.jsx';
import { Loader } from '../loader/Loader.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemListContainer = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
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

    const fetchMore = async (url) => {  
        setLoadingMore(true)
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
        setLoadingMore(false)
    }

    const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&ingr=${inputValue}`
    
    useEffect(() => {
        fetch(apiUrl)
    }, [])
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetch(apiUrl)
        }
    }
    
    const handleClick = () => {
        fetch(apiUrl)
    }

    const seeMore = async () => {
        if (!loadingMore) {
            fetchMore(nextPage)
        }
    }

    return (
        <>
        <Link to='/'>asd</Link>
            <div className='searchContainer'>
                <input placeholder='Search food...' className='inputSearch' onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setInputValue(e.target.value)} type="text" />
                <button className='buttonSearch' onClick={handleClick}>Search</button>
            </div>
            {
                !loading ?
                <div>
                    
                    {
                        data?.length > 0 ?
                        <>
                            <div className='titlesContainer'>
                                <span className='quantityTitle'>Quantity</span>
                                <span className='unitTitle'>Unit</span>
                                <span className='foodTitle'>Food</span>
                                <span className='nutrientsTitle'>Nutrients</span>
                            </div>
                            <ItemList data={data} loadingMore={loadingMore} nextPage={nextPage} seeMore={seeMore} loading={loading}/>
                        </>
                        : <span>We haven't found that food</span>    
                    }
                </div>  
                : 
                <Loader/>
            }
        </>
    )
}
