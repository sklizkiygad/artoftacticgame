import React from 'react';
import style from './TankTemplate.module.scss';
import  t34Src from '../../assets/image/t34.png';

interface TankTemplateProps{
    tankType: String 
}

const TankTemplate:React.FC<TankTemplateProps> = ({tankType}) => {
    
   
    return (
        <div className={style.tank}>
        <img src={t34Src}  />
     </div>
    );
};

export default  TankTemplate;