import React from "react";
type TextInputProp={
    lable?:string,
    placeholder?:string,
    backgroundColor?:string

}

const TextInput = (props:TextInputProp)=>{
    return(
        <>
        <div style={{backgroundColor : props.backgroundColor}}>
            <label htmlFor={props.lable}>{props.lable}</label>
            <input id={props.lable}  type="text" placeholder={props.placeholder} />
        </div>
        </>
    )
}
export default TextInput