import {useState, useEffect} from 'react'
import { GetGifts } from '../helpers/GetGifts';

export const useFetchGift = (category) => {

    const [counter, setCounter] = useState(9);
    const [imgs, setImgs] = useState([]);
    const [isEnable, setEnable] = useState(true);
    const [isLoading, setIsLoading] = useState(true)

    const getImgs = async () => {
        setIsLoading(true);
        const newImgs = await GetGifts(category, counter);
        setImgs(newImgs);
        counter > 10 ? setEnable(false) : setEnable(true);
        setIsLoading(false);
    }
    const getMore = () => setCounter((prev)=>prev + 9);
    const getLess = () => setCounter((prev)=>prev - 9);
  
    useEffect(() =>{
        getImgs();
    }, [counter]);
    
    return {
        imgs,
        isLoading,
        isEnable,
        getMore,
        getLess
    }
}
