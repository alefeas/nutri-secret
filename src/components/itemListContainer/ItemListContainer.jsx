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
        const api = `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        fetch(api)
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
        <div className='itemListContainer'>
            <div className='goBackSearchContainer'>
                <div className='goBackContainer'>
                    <Link to='/' className='goBackLink'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="back-arrow"><path d="M60.52 63a1 1 0 0 1-1 1H44.41a1 1 0 0 1-.62-.21l-39.93-31a1 1 0 0 1-.38-.79 1 1 0 0 1 .39-.79L44 .21a1 1 0 0 1 .57-.21h15a1 1 0 0 1 .61 1.79L21.07 32l38.66 30a1 1 0 0 1 .79 1Z" data-name="Layer 30"></path></svg> Go back</Link>
                </div>
                <div className='searchContainer'>
                    <input placeholder='Search food...' className='inputSearch' onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setInputValue(e.target.value)} type="text" />
                    <button className='buttonSearch' aria-label='searchButton' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg></button>
                </div>
            </div>
            {
                !loading ?
                <div>
                    
                    {
                        data?.length > 0 ?
                        <>
                            <div className='titlesContainer'>
                                <span className='quantityTitle'>Qty</span>
                                <span className='unitTitle'>Unit</span>
                                <span className='foodTitle'>Food</span>
                                <span className='nutrientsTitle'>Nutrients</span>
                            </div>
                            <ItemList data={data} loadingMore={loadingMore} nextPage={nextPage} seeMore={seeMore} loading={loading}/>
                        </>
                        : 
                        <div className='noResults'>
                            <span className='notFoundSearch'>We haven't found that food</span>    
                        </div>
                    }
                </div>  
                : 
                <Loader/>
            }
        </div>
    )
}
