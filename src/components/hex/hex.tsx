import React from 'react';
import style from './hex.module.scss';
import {IHex} from "../../utils/types";

interface hexProps{
    dataHex:IHex
}

const Hex:React.FC<hexProps> = ({dataHex}) => {

    return (
        <div className={style.hex}>
           <p style={{color:'black', position:'absolute', bottom:0, left:'50%'}}>{dataHex.id.toString()}</p>
        </div>
    );
};

export default Hex;