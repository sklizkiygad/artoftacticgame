import React, {useState} from 'react';
import style from './hex.module.scss';
import {IHex} from "../../utils/types";
import { type } from '@testing-library/user-event/dist/type';

interface hexProps{
    dataHex:IHex
}

const Hex:React.FC<hexProps> = ({dataHex}) => {

    return (
        <div className={style.hex}>
        </div>
    );
};

export default Hex;