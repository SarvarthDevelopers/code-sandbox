import { JSX, useContext } from 'react'
import './card.css'
import { ThemeContext } from '../../context/theme/theme'

type CardProp={
    children: JSX.Element,
    bgColor?:string,
    height?:string,
    padding?:string
    
}

function Card(props:CardProp){
    const theme=useContext(ThemeContext)
    return(
        <div className={`card ${theme}`} style={{
            backgroundColor:props.bgColor,
            height:`${props.height}rem`,
            padding:`${props.padding}rem`
            }}>
               {props.children}
        </div>
    )
}
export default Card