import React from 'react';
import style from './hex.module.scss';
import {IHex} from "../../utils/types";

interface hexProps{
    dataHex:IHex,
    children: React.ReactNode
}

const Hex:React.FC<hexProps> = ({dataHex, children}) => {

    return (
        <div className={style.hex}>
            {children}
           <p>{dataHex.id.toString()}</p>
        </div>
    );
};

export default Hex;