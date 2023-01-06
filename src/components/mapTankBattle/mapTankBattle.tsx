import { useEffect, useState } from 'react';
import { IHex } from '../../utils/types';
import Hex from '../hex/hex';
import TankTemplate from '../TankTemplate/TankTemplate';
import style from './mapTankBattle.module.scss'



interface IMap {
    rowCount: number,
    columnCount: number
}

const Map:React.FC<IMap> = ({rowCount, columnCount})=>{
    const [hexes, setHexes] = useState<Array<Array<IHex>>>([])

   const fillHexArray=()=>{
    let arrayToFill:Array<Array<IHex>> = [];
    let idCounter:number = 0;
    let isEven:boolean = false;
    for (let i = 0; i<rowCount;i++){
        let columnItems:Array<IHex> = [];
        for(let j = 0; j < (isEven ? columnCount - 1 : columnCount); j++){
            columnItems.push({id:idCounter})
            idCounter++;
        }
        isEven = !isEven;
        arrayToFill.push(columnItems);
    }
    setHexes(arrayToFill)
   }

    useEffect(()=>{
        fillHexArray()
        console.log(hexes)
    },[])

    return(
        
    <div className={style.mapWrapper}>

      

    {hexes.map(el=>{
      return <div className={style.hexRow}>{el.map(item=><Hex dataHex={item}><TankTemplate tankType={''}/></Hex>)}</div>  
    })}
       </div>
    )
}

export default Map;