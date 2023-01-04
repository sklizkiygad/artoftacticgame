import { useEffect, useState } from 'react';
import { IHex } from '../../utils/types';
import Hex from '../hex/hex';
import style from './mapTankBattle.module.scss'

const Map = ()=>{
    const [hexes, setHexes] = useState<Array<IHex>>([{id:0}])

   
   const fillHexArray=()=>{
    let arrayToFill=[]
    for (let i = 0; i<38;i++){
        arrayToFill.push({id:i})
    }
    setHexes(arrayToFill)
   }

    useEffect(()=>{
        fillHexArray()
    },[])

    return(<div className={style.mapWrapper}>
    
    <div className={style.hexRow}>
    {
        hexes.slice(0, 7).map((item)=>{
            return  <Hex dataHex={item}/>
        })
        
    }
    </div>

    <div className={style.hexRow}>
    {
        hexes.slice(8, 14).map((item)=>{
            return  <Hex dataHex={item}/>
        })
        
    }
    </div>

    <div className={style.hexRow}>
    {
        hexes.slice(15, 22).map((item)=>{
            return  <Hex dataHex={item}/>
        })
        
    }
    </div>

    <div className={style.hexRow}>
    {
        hexes.slice(23, 29).map((item)=>{
            return  <Hex dataHex={item}/>
        })
        
    }
    </div>

    <div className={style.hexRow}>
    {
        hexes.slice(30, 37).map((item)=>{
            return  <Hex dataHex={item}/>
        })
        
    }
    </div>

       </div>
    )
}

export default Map;