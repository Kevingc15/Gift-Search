import { useState, useEffect } from 'react'
import { GetGifts } from "../helpers/GetGifts";
import { GiftCard } from './GiftCard';
import { useFetchGift } from '../Hooks/useFetchGift';

export const GiftGrid = ({category}) => {

  const {imgs, isLoading, isEnable, getMore, getLess} = useFetchGift(category);
  

  return (<>
    <h2>{category}</h2>
    {
      isLoading && <h2>Cargando...</h2>
    }
    <div className='card-grid'>
      {
        imgs.map((image) => (
          <GiftCard key={image.id} {...image}/>
        ))
      }
    </div>
    <button disabled={isEnable} onClick={getLess}>Busca Menos</button>
    <button onClick={getMore}>Busca Más</button>
  </>)
}
