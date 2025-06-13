import React, { useContext } from "react";
import './notes.css';
import { ColorDark,ColorLight, Priority } from "./notes-type";
import Card from "./card/card";
import {FaTrash} from 'react-icons/fa' ;
import { ThemeContext } from "../context/theme/theme";

type NotePrope={
    id:string,
    text:string,
    // this is a union
    priority?:Priority,
    deleteNote:(id:string)=>void
}

const Note:React.FC<NotePrope> =(props)=>{
    const theme=useContext(ThemeContext)



    return(
        <Card
         bgColor={theme==='dark'?props.priority && ColorDark[props.priority]:props.priority && ColorLight[props.priority]   }
         height="2"
         padding="1"
         >
            <>
           <div>
         {props.text}  
           </div>
           <div className="right-corner">
        
            <FaTrash onClick={()=>props.deleteNote(props.id)} />
           </div>
           </>
        </Card>
    )
}
export default Note