import React from 'react';
import style from './hex.module.scss';
import {IHex} from "../../utils/types";

interface hexProps{
    dataHex:IHex
}

const Hex:React.FC<hexProps> = ({dataHex}) => {

    return (
        <div className={style.hex}>
           <p>{dataHex.id.toString()}</p>
        </div>
    );
};

export default Hex;